import { drawImageWithColor, setFont } from '@/services/canvas';
import { cardConstants, getSuitFillColor } from '@/services/canvas/card';
import { loadSampleSpotifyCode } from '@/services/spotify';
import { Image, loadImage } from 'canvas';
import { CardDesign, CardDesigner, CardOutputStatus } from '../../options/models';

const frame = require('@/static/icons/frame.svg').default as string;
const frameOffsetY = 15;
const frameTopHeight = 175;

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

const lyricFontHeight = 50;
const lineWidth = 4;
const decorativeLineOffset = 25;

const artWidth = 450;
const artHeight = 850;
const textOffsetY = 5;
const textAreaPercentOffset = .3;

export const spotifyCardDesigner: SpotifyCardDesigner = {
	processCard: async (input) => {
		const { card, context: ctx, options } = input;
		const { design, suit, skip } = card;
		const { font, fullArea, scaleFactor } = cardConstants;
		const { isDevelopment } = options;

		if (!design || skip || !design.year || !design.lyrics || !design.lyrics.length) {
			return {
				...card,
				outputStatus: CardOutputStatus.skipped
			};
		}

		const color = getSuitFillColor(suit);

		const scaledFullWidth = fullArea.width * scaleFactor;
		const scaledFullHeight = fullArea.height * scaleFactor;
		const scaledArtWidth = artWidth * scaleFactor;
		const scaledArtHeight = artHeight * scaleFactor;

		const centerX = scaledFullWidth / 2;
		const areaX = (scaledFullWidth - scaledArtWidth) / 2;
		const areaY = (scaledFullHeight - scaledArtHeight) / 2;
		const scaledFrameOffsetY = scaleFactor * frameOffsetY;

		{
			// Add the box and decorative lines
			ctx.save();
			ctx.strokeStyle = color;
			ctx.lineWidth = lineWidth * scaleFactor;
			ctx.lineCap = 'square';

			// Box
			const frameImage = await loadImage(Buffer.from(frame, 'utf-8'));
			drawImageWithColor(ctx, frameImage, color, areaX, areaY - scaledFrameOffsetY, scaledArtWidth, scaledArtHeight + scaledFrameOffsetY);

			const scaledLineOffset = decorativeLineOffset * scaleFactor;
			const decorativeLineYLength = (scaledArtHeight / 4) + scaledLineOffset;
			const decorativeLineXLength = (scaledArtWidth / 4) + scaledLineOffset;

			// Lower-left decorative line
			const lowerLeftX = areaX - scaledLineOffset;
			const lowerLeftY = areaY + scaledArtHeight + scaledLineOffset;
			ctx.beginPath();
			ctx.moveTo(lowerLeftX, lowerLeftY);
			ctx.lineTo(lowerLeftX, lowerLeftY - decorativeLineYLength);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(lowerLeftX, lowerLeftY);
			ctx.lineTo(lowerLeftX + decorativeLineXLength, lowerLeftY);
			ctx.stroke();

			// Upper-right decorative line
			const upperRightX = areaX + scaledArtWidth + scaledLineOffset;
			const upperRightY = areaY - scaledLineOffset;
			ctx.beginPath();
			ctx.moveTo(upperRightX, upperRightY);
			ctx.lineTo(upperRightX - decorativeLineXLength, upperRightY);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(upperRightX, upperRightY);
			ctx.lineTo(upperRightX, upperRightY + decorativeLineYLength);
			ctx.stroke();

			ctx.restore();
		}

		ctx.save();
		ctx.fillStyle = getSuitFillColor(suit);
		setFont(ctx, lyricFontHeight * scaleFactor, font);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';

		const { lyrics } = design;
		const scaledTextOffsetY = scaleFactor * (lyricFontHeight + textOffsetY);

		const codeHeight = scaledArtWidth / 4;
		const scaledFrameTopHeight = frameTopHeight * scaleFactor;
		const openTextSpace = scaledArtHeight - scaledFrameTopHeight - codeHeight;

		const totalLyricHeight = lyrics.length * scaledTextOffsetY;
		const lyricsStartY = areaY + scaledFrameTopHeight + ((openTextSpace - totalLyricHeight) * textAreaPercentOffset);

		lyrics.forEach((lyric, index) => {
			ctx.fillText(lyric.toUpperCase(), centerX, lyricsStartY + (index * scaledTextOffsetY));
		});
		ctx.restore();

		{
			// Load Spotify Barcode

			let spotifyCode: Image | null = null;
			if (isDevelopment) {
				spotifyCode = await loadSampleSpotifyCode();
			}

			if (spotifyCode) {
				ctx.save();
				drawImageWithColor(ctx, spotifyCode, color, areaX, areaY + scaledArtHeight - codeHeight, scaledArtWidth, codeHeight);
				ctx.restore();
			}

		}

		return {
			...card,
			outputStatus: CardOutputStatus.ok
		};
	}
};