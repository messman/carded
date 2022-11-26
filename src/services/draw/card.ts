import { CanvasRenderingContext2D, Image, loadImage } from 'canvas';
import { Card, CardMark, isCardMarkSpecialRank, Rank, Suit } from '../../models';
import { loadAsStringFromSrc } from '../file/file';
import { drawImageWithColor } from './canvas';

const suitIcons: Record<keyof typeof Suit, string> = {
	clubs: loadAsStringFromSrc('./designs/2020-dad/static/icons/suit-club.svg'),
	diamonds: loadAsStringFromSrc('./designs/2020-dad/static/icons/suit-diamond.svg'),
	hearts: loadAsStringFromSrc('./designs/2020-dad/static/icons/suit-heart.svg'),
	spades: loadAsStringFromSrc('./designs/2020-dad/static/icons/suit-spade.svg'),
};

const jokerIconString = loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-joker.svg',);

const rankIcons: Record<keyof typeof Rank, string> = {
	ace: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-ace.svg'),
	two: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-two.svg'),
	three: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-three.svg'),
	four: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-four.svg'),
	five: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-five.svg'),
	six: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-six.svg'),
	seven: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-seven.svg'),
	eight: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-eight.svg'),
	nine: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-nine.svg'),
	ten: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-ten.svg'),
	jack: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-jack.svg'),
	queen: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-queen.svg'),
	king: loadAsStringFromSrc('./designs/2020-dad/static/icons/rank-king.svg')
};

// 300 DPI, 2.74 by 3.74
const fullArea = {
	width: 822,
	height: 1122
};
const printSeparation = 72;

// Eventually these constants could be made customizable.
export const cardConstants = {
	fullArea: fullArea,
	cutArea: {
		width: fullArea.width - printSeparation,
		height: fullArea.height - printSeparation
	},
	designArea: {
		width: fullArea.width - (printSeparation * 2),
		height: fullArea.height - (printSeparation * 2)
	},
	backgroundColor: '#FCFCFA',
	blackColor: '#111111',
	redColor: '#7E2E2E',
	lyricFont: 'Barlow Condensed SemiBold',
	otherFont: 'Barlow Condensed Medium',
	rankWidth: 90,
	rankHeight: 125,
	jokerRankHeight: 540,
	rankHeightOffset: 10,
	suitWidth: 90,
	suitHeight: 90,
	suitHeightOffset: 10,
	scaleFactor: 2,
};

export async function drawBasicCard(isDevelopment: boolean, card: Card<any>, ctx: CanvasRenderingContext2D): Promise<void> {
	const { mark } = card;
	const { scaleFactor, suitHeightOffset, rankHeightOffset, rankWidth, suitWidth, backgroundColor, fullArea, designArea, cutArea, jokerRankHeight, rankHeight, suitHeight } = cardConstants;

	const scaledFullWidth = fullArea.width * scaleFactor;
	const scaledFullHeight = fullArea.height * scaleFactor;

	// Fill with background color
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, scaledFullWidth, scaledFullHeight);

	const scaledDesignWidth = designArea.width * scaleFactor;
	const scaledDesignHeight = designArea.height * scaleFactor;
	// Computer inner design area
	const designOffsetX = (scaledFullWidth - scaledDesignWidth) / 2;
	const designOffsetY = (scaledFullHeight - scaledDesignHeight) / 2;

	if (isDevelopment) {
		// Draw design area line
		ctx.strokeStyle = '#cccccc';
		ctx.strokeRect(designOffsetX, designOffsetY, scaledDesignWidth, scaledDesignHeight);

		// Draw cut area line
		ctx.strokeStyle = '#000000';
		const scaledCutWidth = cutArea.width * scaleFactor;
		const scaledCutHeight = cutArea.height * scaleFactor;
		const cutOffsetX = (scaledFullWidth - scaledCutWidth) / 2;
		const cutOffsetY = (scaledFullHeight - scaledCutHeight) / 2;
		ctx.strokeRect(cutOffsetX, cutOffsetY, scaledCutWidth, scaledCutHeight);
	}

	// Get either red or black color.
	const suitFillColor = getSuitFillColor(mark);

	// Compute all the rank positioning and size.
	let rankIconImage: Image;
	const rankOffsetX = designOffsetX;
	const rankOffsetY = designOffsetY + (rankHeightOffset * scaleFactor);
	const scaledRankWidth = rankWidth * scaleFactor;
	let scaledRankHeight: number;

	// Compute all the suit positioning and size.
	let suitIconImage: Image | null = null;
	const scaledSuitWidth = suitWidth * scaleFactor;
	const scaledSuitHeight = suitHeight * scaleFactor;
	let suitOffsetX: number = 0;
	let suitOffsetY: number = 0;

	if (isCardMarkSpecialRank(mark)) {
		rankIconImage = await loadImage(Buffer.from(jokerIconString, 'utf-8'));
		scaledRankHeight = jokerRankHeight * scaleFactor;
	}
	else {
		const rankIcon = rankIcons[Rank[mark.rank] as keyof typeof Rank];
		rankIconImage = await loadImage(Buffer.from(rankIcon, 'utf-8'));
		const scaledRankHeight = rankHeight * scaleFactor;

		const suitIcon = suitIcons[Suit[mark.suit] as keyof typeof Suit];
		suitIconImage = await loadImage(Buffer.from(suitIcon, 'utf-8'));
		// Suit may be a different size. Make sure it is still centered beneath rank.
		const rankToSuitOffset = (scaledRankWidth - scaledSuitWidth) / 2;
		suitOffsetX = rankOffsetX + rankToSuitOffset;
		suitOffsetY = rankOffsetY + scaledRankHeight + suitHeightOffset;
	}

	function drawRankAndSuit() {
		drawImageWithColor(ctx, false, rankIconImage, suitFillColor, rankOffsetX, rankOffsetY, scaledRankWidth, scaledRankHeight);
		if (suitIconImage) {
			drawImageWithColor(ctx, false, suitIconImage, suitFillColor, suitOffsetX, suitOffsetY, scaledSuitWidth, scaledSuitHeight);
		}
	}

	// Draw in top-left, then rotate and draw again.
	ctx.save();
	drawRankAndSuit();
	const centerX = scaledFullWidth / 2;
	const centerY = scaledFullHeight / 2;
	ctx.translate(centerX, centerY);
	ctx.rotate(Math.PI);
	ctx.translate(-centerX, -centerY);
	drawRankAndSuit();
	ctx.restore();
}

export function getSuitFillColor(mark: CardMark): string {
	// If suit is none, use black (for joker).
	if (isCardMarkSpecialRank(mark)) {
		return cardConstants.blackColor;
	}
	return (mark.suit === Suit.diamonds || mark.suit === Suit.hearts) ? cardConstants.redColor : cardConstants.blackColor;
}