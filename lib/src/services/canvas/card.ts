import { CanvasRenderingContext2D, Image, loadImage } from 'canvas';
import { drawImageWithColor } from '.';
import { Card, Rank, Suit } from '../../options/models';

const suitIcons: Record<keyof typeof Suit, string> = {
	none: '',
	clubs: require('@/static/icons/suit-club.svg').default as string,
	diamonds: require('@/static/icons/suit-diamond.svg').default as string,
	hearts: require('@/static/icons/suit-heart.svg').default as string,
	spades: require('@/static/icons/suit-spade.svg').default as string,
};

const rankIcons: Record<keyof typeof Rank, string> = {
	joker: require('@/static/icons/rank-joker.svg').default as string,
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

export interface Size {
	width: number;
	height: number;
}

export interface CardConstants {
	designArea: Size;
	cutArea: Size;
	fullArea: Size;
	backgroundColor: string;
	blackColor: string;
	redColor: string;
	font: string;
	rankWidth: number;
	suitWidth: number;
	iconHeightFactor: number;
	iconJokerHeightFactor: number;
}

// Eventually this would be made customizable.
export const cardConstants: CardConstants = {
	designArea: {
		// 300 DPI, 2.28 * 3.27 in
		width: 684,
		height: 981
	},
	cutArea: {
		// 300 DPI, 2.48 * 3.46 in
		width: 744,
		height: 1038
	},
	fullArea: {
		// 300 DPI, 2.72 * 3.7 in
		width: 816,
		height: 1110
	},
	backgroundColor: '#FCFCFA',
	blackColor: '#111111',
	redColor: '#9D1919',
	font: 'Futura',
	rankWidth: 110,
	suitWidth: 85,
	iconHeightFactor: 1,
	iconJokerHeightFactor: 4.25,
};

export async function drawBasicCard(isDevelopment: boolean, card: Card<any>, ctx: CanvasRenderingContext2D): Promise<void> {
	const { rank, suit } = card;
	const { rankWidth, suitWidth, backgroundColor, fullArea, designArea, cutArea, iconHeightFactor, iconJokerHeightFactor } = cardConstants;

	// Fill with background color
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, fullArea.width, fullArea.height);

	// Computer inner design area
	const designOffsetX = (fullArea.width - designArea.width) / 2;
	const designOffsetY = (fullArea.height - designArea.height) / 2;

	if (isDevelopment) {
		// Draw design area line
		ctx.strokeStyle = '#cccccc';
		ctx.strokeRect(designOffsetX, designOffsetY, designArea.width, designArea.height);

		// Draw cut area line
		ctx.strokeStyle = '#000000';
		const cutOffsetX = (fullArea.width - cutArea.width) / 2;
		const cutOffsetY = (fullArea.height - cutArea.height) / 2;
		ctx.strokeRect(cutOffsetX, cutOffsetY, cutArea.width, cutArea.height);
	}

	const suitFillColor = getSuitFillColor(suit);

	const rankIcon = rankIcons[Rank[rank] as keyof typeof Rank];
	const rankIconImage = await loadImage(Buffer.from(rankIcon, 'utf-8'));
	const rankIconImageHeightFactor = rank === Rank.joker ? iconJokerHeightFactor : iconHeightFactor;
	const rankOffsetX = designOffsetX;
	const rankOffsetY = designOffsetY + 20;
	const rankHeight = rankWidth * rankIconImageHeightFactor;

	const suitIcon = suitIcons[Suit[suit] as keyof typeof Suit];
	let suitIconImage: Image | null = null;
	let suitOffsetX: number = 0;
	let suitOffsetY: number = 0;
	if (suitIcon) {
		suitIconImage = await loadImage(Buffer.from(suitIcon, 'utf-8'));
		// Suit may be a different size. Make sure it is still centered beneath rank.
		const rankToSuitOffset = (rankWidth - suitWidth) / 2;
		suitOffsetX = rankOffsetX + rankToSuitOffset;
		suitOffsetY = rankOffsetY + rankToSuitOffset + rankHeight + 10;
	}

	function drawRankAndSuit() {
		drawImageWithColor(ctx, rankIconImage, suitFillColor, rankOffsetX, rankOffsetY, rankWidth, rankHeight);
		if (suitIconImage) {
			drawImageWithColor(ctx, suitIconImage, suitFillColor, suitOffsetX, suitOffsetY, suitWidth, suitWidth);
		}

		// if (isDevelopment) {
		// 	ctx.save();
		// 	ctx.globalAlpha = .2;
		// 	ctx.fillStyle = 'blue';
		// 	ctx.fillRect(rankOffsetX, rankOffsetY, rankWidth, rankWidth * 3);
		// 	ctx.restore();
		// }
	}

	ctx.save();
	drawRankAndSuit();
	ctx.translate(fullArea.width / 2, fullArea.height / 2);
	ctx.rotate(Math.PI);
	ctx.translate(- fullArea.width / 2, - fullArea.height / 2);
	drawRankAndSuit();
	ctx.restore();
}

export function getSuitFillColor(suit: Suit): string {
	// If suit is none, use black (for joker).
	return (suit === Suit.diamonds || suit === Suit.hearts) ? cardConstants.redColor : cardConstants.blackColor;
}