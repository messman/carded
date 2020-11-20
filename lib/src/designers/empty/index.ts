import { Card, CardDesign, CardDesigner, CardOutput, CardOutputStatus, Deck, Options, Rank, Suit } from '../../options/models';
import { create, getContext } from '../../services/canvas';
import * as path from 'path';
import { exportCanvasToPNG } from '../../services/export';

export interface EmptyCardDesign extends CardDesign {
	// none
}

export type EmptyCardDesigner = CardDesigner<EmptyCardDesign>;

export const emptyCardDesigner: EmptyCardDesigner = {
	processDeck: async (options, deck) => {

		const outputCards: CardOutput<EmptyCardDesign>[] = [];

		for (let i = 0; i < deck.cards.length; i++) {
			const card = deck.cards[i];
			await drawCard(options, deck, card);
			outputCards.push({
				...card,
				outputStatus: CardOutputStatus.ok
			});
		}

		return {
			cards: outputCards
		};
	}
};

async function drawCard(options: Options<EmptyCardDesign>, deck: Deck<EmptyCardDesign>, card: Card<EmptyCardDesign>): Promise<void> {
	const { width, height } = options;
	const { outputAbsoluteDirectory, outputDeckPrefix } = deck;
	const { rank, suit } = card;

	const canvas = create({
		width: width,
		height: height
	});
	const ctx = getContext(canvas);

	ctx.font = '20px Arial';

	ctx.textBaseline = 'middle';
	ctx.textAlign = 'center';

	const title = `${Rank[rank]}_${Suit[suit]}`;
	ctx.fillText(title, width / 2, height / 2);

	const fileName = `${outputDeckPrefix}${title}.png`;
	const outputFileName = path.join(outputAbsoluteDirectory, fileName);

	await exportCanvasToPNG(canvas, outputFileName);
}