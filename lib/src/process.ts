import { emptyCardDesigner } from './designers/empty';
import { CardDesign, CardDesigner, ProcessCardOutput, Options, Deck, Card, Rank, Suit } from './options/models';
import { create } from './services/canvas';
import { log } from './services/log';
import * as path from 'path';
import { exportCanvasToPNG } from './services/export';
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

	for (let i = 0; i < decks.length; i++) {
		const deck = decks[i];
		const { cards } = deck;
		for (let j = 0; j < cards.length; j++) {
			const card = cards[j];
			processCard(cardDesigner, options, deck, card);
		}
	}

	return {
		decks: []
	};
}

async function processCard<CD extends CardDesign>(designer: CardDesigner<CD>, options: Options<CD>, deck: Deck<CD>, card: Card<CD>): Promise<void> {
	const { isDevelopment } = options;
	const { outputDeckPrefix, outputAbsoluteDirectory } = deck;
	const { rank, suit } = card;

	const [canvas, ctx] = create();

	drawBasicCard(!!isDevelopment, card, ctx);

	designer.processCard({
		options: options,
		deck: deck,
		card: card,
		canvas: canvas,
		context: ctx
	});

	const title = `${Rank[rank]}_${Suit[suit]}`;
	const fileName = `${outputDeckPrefix}${title}.png`;
	const outputFileName = path.join(outputAbsoluteDirectory, fileName);
	await exportCanvasToPNG(canvas, outputFileName);
}