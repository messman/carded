import { emptyCardDesigner } from './designers/empty';
import { CardDesign, CardDesigner, DeckOutput, Options } from './options/models';
import { log } from './services/log';

export interface ProcessInput<CD extends CardDesign = any> {
	isDevelopment?: boolean;
	isCachingOptions?: boolean;
	calculateOutput?: boolean;
	options: Options<CD>;
	designer: CardDesigner<CD> | null;
}

export interface ProcessOutput<CD extends CardDesign = any> {
	deckOutput: DeckOutput<CD>[];
}

export async function process<CD extends CardDesign = any>(input: ProcessInput<CD>): Promise<ProcessOutput<CD> | null> {
	const { isDevelopment, calculateOutput, designer, options } = input;

	if (isDevelopment) {
		log('process - dev mode');
	}

	const cardDesigner = designer || emptyCardDesigner;

	const { decks } = options;
	for (let i = 0; i < decks.length; i++) {
		const deck = decks[i];
		await cardDesigner.processDeck(options, deck);
	}

	if (calculateOutput) {
		return {
			deckOutput: []
		};
	}
	return null;
}