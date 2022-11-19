import { emptyCardDesigner } from './designers/empty';
import { CardDesign, CardDesigner, ProcessCardOutput, Options, Deck, Card, Rank, Suit, CardOutputStatus } from './options/models/models';
import { create } from './services/canvas/canvas';
import { log } from './services/log/log';
import * as path from 'path';
import { exportCanvasToPNG } from './services/export/export';
import { drawBasicCard } from './services/canvas/card';

export interface ProcessOutput<CD extends CardDesign = any> {
	decks: ProcessCardOutput<CD>[][];
}

export async function process<CD extends CardDesign = any>(options: Options<CD>): Promise<ProcessOutput<CD>> {
	const { isDevelopment, decks, designer } = options;

	if (isDevelopment) {
		log('process - dev mode');
	}

	const cardDesigner = designer || (emptyCardDesigner as unknown as CardDesigner<CD>);
	const deckOutputs: ProcessCardOutput<CD>[][] = [];

	for (let i = 0; i < decks.length; i++) {
		const deck = decks[i];
		const deckOutput: ProcessCardOutput<CD>[] = [];
		const { cards } = deck;
		for (let j = 0; j < cards.length; j++) {
			const card = cards[j];
			const cardOutput = await processCard(cardDesigner, options, deck, card);
			deckOutput.push(cardOutput);
		}
		deckOutputs.push(deckOutput);
	}

	return {
		decks: deckOutputs
	};
}

async function processCard<CD extends CardDesign>(designer: CardDesigner<CD>, options: Options<CD>, deck: Deck<CD>, card: Card<CD>): Promise<ProcessCardOutput<CD>> {
	const { isDevelopment } = options;
	const { outputDeckPrefix, outputAbsoluteDirectory } = deck;
	const { rank, suit, skip } = card;

	if (skip) {
		return Promise.resolve({
			...card,
			outputStatus: CardOutputStatus.skipped
		});
	}

	const [canvas, ctx] = create();

	drawBasicCard(!!isDevelopment, card, ctx);

	const output = await designer.processCard({
		options: options,
		deck: deck,
		card: card,
		canvas: canvas,
		context: ctx
	});

	if (output.outputStatus === CardOutputStatus.ok) {
		const title = `${Rank[rank]}_${Suit[suit]}`;
		const fileName = `${outputDeckPrefix}${title}.png`;
		const outputFileName = path.join(outputAbsoluteDirectory, fileName);
		await exportCanvasToPNG(canvas, outputFileName);
	}

	return output;
}