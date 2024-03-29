import { CanvasRenderingContext2D, Image, loadImage } from 'canvas';
import { CardDesignerDrawCard, DrawCardOutputStatus } from '../../models';
import { drawImageWithColor, setFont } from '../../services/draw/canvas';
import { cardConstants, getSuitFillColor } from '../../services/draw/card';
import { loadAsStringRelative } from '../../services/file/file';
import { loadSampleSpotifyCode, loadSpotifyCode } from '../../services/spotify/spotify';
import { Dad2020CardDesign, Dad2020CardDesignerInput } from './shared';

const frame = loadAsStringRelative(__dirname, './static/icons/frame.svg');
const frameOffsetY = 15;
const frameTopHeight = 175;
const frameBottomHeight = 70;

const lyricFontHeight = 52;
const lineWidth = 4;
const decorativeLineOffset = 25;

const artWidth = 450;
const artHeight = 850;
const textOffsetY = 5;
const textAreaPercentOffset = .45;

const yearAndArtistFontHeight = 44;
const yearAndArtistMargin = 8;

export const drawCard: CardDesignerDrawCard<Dad2020CardDesignerInput, Dad2020CardDesign> = async (drawContext) => {
	const { input, card, context: ctx } = drawContext;

	const { design, mark, skip } = card;
	const { lyricFont, fullArea, scaleFactor } = cardConstants;
	const { isDebug } = input.meta;

	if (!design || skip || !design.year || !design.lyrics || !design.lyrics.length) {
		return {
			mark,
			outputStatus: DrawCardOutputStatus.skipped,
			outputStatusMessage: null
		};
	}

	const color = getSuitFillColor(mark);

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
		drawImageWithColor(ctx, false, frameImage, color, areaX, areaY - scaledFrameOffsetY, scaledArtWidth, scaledArtHeight + scaledFrameOffsetY);
	}

	const { lyrics, lyricsSizeFactor, year, artistLines, spotifyUri } = design;

	drawYearAndArtist(ctx, color, year, artistLines, areaX, areaY, scaledArtWidth, scaledArtHeight);

	ctx.save();
	ctx.fillStyle = getSuitFillColor(mark);
	const scaledLyricFontSize = scaleFactor * lyricFontHeight * (lyricsSizeFactor || 1);
	setFont(ctx, scaledLyricFontSize, lyricFont);
	ctx.textAlign = 'center';
	ctx.textBaseline = 'top';

	const scaledTextOffsetY = scaledLyricFontSize + (scaleFactor * textOffsetY);

	const codeHeight = scaledArtWidth / 4;
	const scaledFrameTopHeight = frameTopHeight * scaleFactor;
	const scaledFrameBottomHeight = frameBottomHeight * scaleFactor;
	const openTextSpace = scaledArtHeight - scaledFrameTopHeight - scaledFrameBottomHeight - codeHeight;

	const totalLyricHeight = lyrics.length * scaledTextOffsetY;
	const lyricsStartY = areaY + scaledFrameTopHeight + ((openTextSpace - totalLyricHeight) * textAreaPercentOffset);

	lyrics.forEach((lyric, index) => {
		const lyricText = lyric.trim().toUpperCase();
		ctx.fillText(lyricText, centerX, lyricsStartY + (index * scaledTextOffsetY));
	});
	ctx.restore();

	{
		// Load Spotify Barcode

		let spotifyCode: Image | null = null;
		if (isDebug) {
			spotifyCode = await loadSampleSpotifyCode();
		}
		else {
			try {
				spotifyCode = await loadSpotifyCode({
					width: scaledArtWidth,
					spotifyUri: spotifyUri
				});
			}
			catch (e) {
				console.log(e);
				return {
					mark,
					outputStatus: DrawCardOutputStatus.error,
					outputStatusMessage: "Could not load Spotify code"
				};
			}
		}

		if (spotifyCode) {
			ctx.save();
			drawImageWithColor(ctx, !isDebug, spotifyCode, color, areaX, areaY + scaledArtHeight - codeHeight, scaledArtWidth, codeHeight);
			ctx.restore();
		}

	}

	return {
		mark,
		outputStatus: DrawCardOutputStatus.ok,
		outputStatusMessage: null
	};
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