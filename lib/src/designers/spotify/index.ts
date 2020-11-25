import { setFont } from '@/services/canvas';
import { cardConstants, getSuitFillColor } from '@/services/canvas/card';
import { CardDesign, CardDesigner, CardOutputStatus } from '../../options/models';

export interface SpotifyCardDesign extends CardDesign {
	lyrics: string[];
	artistLines: string[];
	includeYearOnNewLine: boolean;
	year: number;
	song: string;
	spotifyUri: string;
	geniusLink: string;
	debug?: string;
}

export type SpotifyCardDesigner = CardDesigner<SpotifyCardDesign>;

const lyricFontHeight = 40;

export const spotifyCardDesigner: SpotifyCardDesigner = {
	processCard: async (input) => {
		const { card, context: ctx, options } = input;
		const { design, suit, skip } = card;
		const { isDevelopment } = options;
		const { font, fullArea, designArea, rankWidth, suitWidth } = cardConstants;

		if (!design || skip || !design.year || !design.lyrics || !design.lyrics.length) {
			return {
				...card,
				outputStatus: CardOutputStatus.skipped
			};
		}

		const centerX = fullArea.width / 2;
		const maxRankSuitWidth = Math.max(rankWidth, suitWidth) * 2;
		const spacing = 40;
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

		ctx.save();
		ctx.fillStyle = getSuitFillColor(suit);
		setFont(ctx, lyricFontHeight, font);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';

		const { lyrics } = design;


		lyrics.forEach((lyric, index) => {
			ctx.fillText(lyric.toUpperCase(), centerX, areaY + (index * lyricFontHeight));
		});
		ctx.restore();

		return {
			...card,
			outputStatus: CardOutputStatus.ok
		};
	}
};