import { getSuitFillColor } from '@/services/canvas/card';
import { CardDesign, CardDesigner, CardOutputStatus } from '../../options/models';

export interface SpotifyCardDesign extends CardDesign {
	lyrics: string[];
	artist: string;
	year: number;
	spotifyUri: string;
	geniusLink: string;
	debug?: string;
}

export type SpotifyCardDesigner = CardDesigner<SpotifyCardDesign>;

export const spotifyCardDesigner: SpotifyCardDesigner = {
	processCard: async (input) => {
		const { card, context: ctx, options } = input;
		const { design, suit } = card;

		if (!design || !design.year || !design.lyrics || !design.lyrics.length) {
			return {
				...card,
				outputStatus: CardOutputStatus.unspecified
			};
		}

		const { isDevelopment } = options;

		if (isDevelopment) {
			ctx.save();

			ctx.fillStyle = getSuitFillColor(suit);
			ctx.fillText('Hello', 200, 200);

			ctx.restore();
		}

		return {
			...card,
			outputStatus: CardOutputStatus.ok
		};
	}
};