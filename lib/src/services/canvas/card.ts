import { CanvasRenderingContext2D, Image, loadImage } from 'canvas';
import { drawImageWithColor } from './canvas';
import { Card, Rank, Suit } from '../../options/models/models';

const suitIcons: Record<keyof typeof Suit, string> = {
	none: '',
	clubs: require('@/static/icons/suit-club.svg').default as string,
	diamonds: require('@/static/icons/suit-diamond.svg').default as string,
	hearts: require('@/static/icons/suit-heart.svg').default as string,
	spades: require('@/static/icons/suit-spade.svg').default as string,
};

const jokerIconString = require('@/static/icons/rank-joker.svg').default as string;

const rankIcons: Record<keyof typeof Rank, string> = {
	joker1: jokerIconString,
	joker2: jokerIconString,
	ace: require('@/static/icons/rank-ace.svg').default as string,
	two: require('@/static/icons/rank-two.svg').default as string,
	three: require('@/static/icons/rank-three.svg').default as string,
	four: require('@/static/icons/rank-four.svg').default as string,
	five: require('@/static/icons/rank-five.svg').default as string,
	six: require('@/static/icons/rank-six.svg').default as string,
	seven: require('@/static/icons/rank-seven.svg').default as string,
	eight: require('@/static/icons/rank-eight.svg').default as string,
	nine: require('@/static/icons/rank-nine.svg').default as string,
	ten: require('@/static/icons/rank-ten.svg').default as string,
	jack: require('@/static/icons/rank-jack.svg').default as string,
	queen: require('@/static/icons/rank-queen.svg').default as string,
	king: require('@/static/icons/rank-king.svg').default as string
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
	redColor: '#8E2A2A',
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
	const { rank, suit } = card;
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
	const suitFillColor = getSuitFillColor(suit);

	// Compute all the rank positioning and size.
	const rankIcon = rankIcons[Rank[rank] as keyof typeof Rank];
	const rankIconImage = await loadImage(Buffer.from(rankIcon, 'utf-8'));
	const rankOffsetX = designOffsetX;
	const rankOffsetY = designOffsetY + (rankHeightOffset * scaleFactor);
	const scaledRankWidth = rankWidth * scaleFactor;
	const scaledRankHeight = ((rank === Rank.joker1 || rank === Rank.joker2) ? jokerRankHeight : rankHeight) * scaleFactor;

	// Compute all the suit positioning and size.
	const suitIcon = suitIcons[Suit[suit] as keyof typeof Suit];
	let suitIconImage: Image | null = null;
	let suitOffsetX: number = 0;
	let suitOffsetY: number = 0;
	const scaledSuitWidth = suitWidth * scaleFactor;
	const scaledSuitHeight = suitHeight * scaleFactor;
	if (suitIcon) {
		suitIconImage = await loadImage(Buffer.from(suitIcon, 'utf-8'));
		// Suit may be a different size. Make sure it is still centered beneath rank.
		const rankToSuitOffset = (scaledRankWidth - scaledSuitWidth) / 2;
		suitOffsetX = rankOffsetX + rankToSuitOffset;
		suitOffsetY = rankOffsetY + scaledRankHeight + suitHeightOffset;
	}

	function drawRankAndSuit() {
		drawImageWithColor(ctx, rankIconImage, suitFillColor, rankOffsetX, rankOffsetY, scaledRankWidth, scaledRankHeight);
		if (suitIconImage) {
			drawImageWithColor(ctx, suitIconImage, suitFillColor, suitOffsetX, suitOffsetY, scaledSuitWidth, scaledSuitHeight);
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

export function getSuitFillColor(suit: Suit): string {
	// If suit is none, use black (for joker).
	return (suit === Suit.diamonds || suit === Suit.hearts) ? cardConstants.redColor : cardConstants.blackColor;
}