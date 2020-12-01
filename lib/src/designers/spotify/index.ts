import { drawImageWithColor, setFont } from '@/services/canvas';
import { cardConstants, getSuitFillColor } from '@/services/canvas/card';
import { loadSampleSpotifyCode } from '@/services/spotify';
import { CanvasRenderingContext2D, Image, loadImage } from 'canvas';
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

const yearAndArtistFontHeight = 40;
const yearAndArtistMargin = 8;

export const spotifyCardDesigner: SpotifyCardDesigner = {
	processCard: async (input) => {
		const { card, context: ctx, options } = input;
		const { design, suit, skip } = card;
		const { lyricFont, fullArea, scaleFactor } = cardConstants;
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

		{
			// Draw Frame
			const scaledFrameOffsetY = scaleFactor * frameOffsetY;
			const frameImage = await loadImage(Buffer.from(frame, 'utf-8'));
			drawImageWithColor(ctx, frameImage, color, areaX, areaY - scaledFrameOffsetY, scaledArtWidth, scaledArtHeight + scaledFrameOffsetY);
		}

		const { lyrics, year, artistLines } = design;

		drawYearAndArtist(ctx, color, year, artistLines, areaX, areaY, scaledArtWidth, scaledArtHeight);

		ctx.save();
		ctx.fillStyle = getSuitFillColor(suit);
		setFont(ctx, lyricFontHeight * scaleFactor, lyricFont);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';

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

function drawYearAndArtist(ctx: CanvasRenderingContext2D, color: string, year: number, artistLines: string[], frameX: number, frameY: number, frameWidth: number, frameHeight: number): void {

	const { scaleFactor, fullArea } = cardConstants;

	ctx.save();

	// Match color of card.
	ctx.strokeStyle = color;
	// Scale line width.
	ctx.lineWidth = lineWidth * scaleFactor;
	// Add padding around endpoint of the line.
	ctx.lineCap = 'square';
	ctx.textBaseline = 'top';

	drawYearOrArtist(ctx, color, [year.toString()], frameX, frameY, frameWidth, frameHeight);

	const scaledCenterX = fullArea.width * scaleFactor / 2;
	const scaledCenterY = fullArea.height * scaleFactor / 2;
	ctx.translate(scaledCenterX, scaledCenterY);
	ctx.rotate(Math.PI);
	ctx.translate(-scaledCenterX, -scaledCenterY);

	drawYearOrArtist(ctx, color, artistLines, frameX, frameY, frameWidth, frameHeight);

	ctx.restore();
}

function drawYearOrArtist(ctx: CanvasRenderingContext2D, color: string, text: string[], frameX: number, frameY: number, frameWidth: number, frameHeight: number): void {

	const { scaleFactor, otherFont } = cardConstants;

	// Offset from the frame where the line will be drawn.
	const scaledLineOffset = decorativeLineOffset * scaleFactor;
	// "Ideal", because in the event of a long artist name, we will shorten it.
	// Use 1/4 of the frame's dimension.
	const idealDecorativeLineYLength = (frameHeight / 4);
	const decorativeLineXLength = (frameWidth / 4);

	const scaledFontHeight = yearAndArtistFontHeight * scaleFactor;
	const scaledTextMargin = yearAndArtistMargin * scaleFactor;

	// Upper-right decorative line (year)
	// X and Y are offset up and to the right of the frame's top right corner.
	const upperRightX = frameX + frameWidth + scaledLineOffset;
	const upperRightY = frameY - scaledLineOffset;

	// Draw the horizontal line (decorative).
	ctx.beginPath();
	ctx.moveTo(upperRightX, upperRightY);
	// Shift backwards by the offset and then by the determined line length.
	ctx.lineTo(upperRightX - scaledLineOffset - decorativeLineXLength, upperRightY);
	ctx.stroke();

	// Draw the vertical line (points to year).
	ctx.beginPath();
	ctx.moveTo(upperRightX, upperRightY);
	// Shift down by the offset and then by the determined line length.
	const upperRightVerticalStop = upperRightY + scaledLineOffset + idealDecorativeLineYLength;
	ctx.lineTo(upperRightX, upperRightVerticalStop);
	ctx.stroke();

	// Draw the text.
	ctx.save();
	// Translate to where our vertical line ended, then rotate 90 degrees.
	ctx.translate(upperRightX, upperRightVerticalStop);
	ctx.rotate(Math.PI / 2);

	ctx.fillStyle = color;
	setFont(ctx, scaledFontHeight, otherFont);
	// Translate for X and Y to set up for the first line.
	ctx.translate(scaledTextMargin * 2, - (scaledFontHeight / 2) - scaledTextMargin);
	const singleLineHeight = scaledFontHeight;
	ctx.translate(0, - (singleLineHeight * (text.length - 1)));
	text.forEach((textLine, i) => {
		ctx.fillText(textLine, 0, singleLineHeight * i);
	});

	ctx.restore();
}