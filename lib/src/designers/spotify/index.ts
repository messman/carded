import { cardConstants } from '@/services/canvas/card';
import { CardDesign, CardDesigner, CardOutputStatus } from '../../options/models';

export interface SpotifyCardDesign extends CardDesign {
	lyrics: string[];
	artist: string;
	year: number;
	song: string;
	spotifyUri: string;
	geniusLink: string;
	debug?: string;
}

export type SpotifyCardDesigner = CardDesigner<SpotifyCardDesign>;

export const spotifyCardDesigner: SpotifyCardDesigner = {
	processCard: async (input) => {
		const { card, context: ctx, options } = input;
		const { design } = card;
		const { isDevelopment } = options;
		const { fullArea, designArea, rankWidth, suitWidth } = cardConstants;

		if (!design || !design.year || !design.lyrics || !design.lyrics.length) {
			return {
				...card,
				outputStatus: CardOutputStatus.unspecified
			};
		}

		const maxRankSuitWidth = Math.max(rankWidth, suitWidth) * 2;
		const spacing = 20;
		const areaWidth = designArea.width - maxRankSuitWidth - spacing;
		const areaHeight = designArea.height - maxRankSuitWidth - spacing;
		const areaX = (fullArea.width - areaWidth) / 2;
		const areaY = (fullArea.height - areaHeight) / 2;

		if (isDevelopment) {
			ctx.save();
			ctx.fillStyle = 'blue';
			ctx.globalAlpha = .1;
			ctx.fillRect(areaX, areaY, areaWidth, areaHeight);
			ctx.restore();
		}

		return {
			...card,
			outputStatus: CardOutputStatus.ok
		};
	}
};