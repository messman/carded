import { Suit } from '@/options/models';
import { Canvas, CanvasRenderingContext2D, createCanvas } from 'canvas';

const suitIcons: Record<keyof typeof Suit, string> = {
	club: require('@/static/icons/suit-club.svg').default as string,
	diamond: require('@/static/icons/suit-diamond.svg').default as string,
	heart: require('@/static/icons/suit-heart.svg').default as string,
	spade: require('@/static/icons/suit-spade.svg').default as string,
};

export function create(): Canvas {
	const canvas = createCanvas(cardConstants.fullArea.width, cardConstants.fullArea.height);
	return canvas;
}

export function getContext(canvas: Canvas): CanvasRenderingContext2D {
	return canvas.getContext('2d');
}

export interface Size {
	width: number;
	height: number;
}

export interface CardConstants {
	designArea: Size;
	fullArea: Size;
	backgroundColor: string;
	blackColor: string;
	redColor: string;
	font: string;
	rankHeight: number;
	suitHeight: number;
	icons: Record<keyof typeof Suit, string>;
}

export const cardConstants: CardConstants = {
	designArea: {
		// 300 DPI, 2.28 * 3.27 in
		width: 684,
		height: 981
	},
	fullArea: {
		// 300 DPI, 2.72 * 3.7 in
		width: 816,
		height: 1110
	},
	backgroundColor: '#FCFCFA',
	blackColor: '#111111',
	redColor: '#9D1919',
	font: 'Futura-Medium',
	rankHeight: 80,
	suitHeight: 80,
	icons: suitIcons
};