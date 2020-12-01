import { Canvas, CanvasRenderingContext2D, createCanvas, Image, registerFont } from 'canvas';
import { cardConstants } from './card';

export function create(): [Canvas, CanvasRenderingContext2D] {
	const { fullArea, scaleFactor } = cardConstants;
	const canvas = createCanvas(fullArea.width * scaleFactor, fullArea.height * scaleFactor);
	return [canvas, canvas.getContext('2d')];
}

export function setFont(context: CanvasRenderingContext2D, size: number, font: string, style?: string): void {
	const styleText = style ? `${style} ` : '';
	registerFont('/Users/agm/Library/Fonts/BarlowCondensed-Medium.ttf', { family: 'Barlow Condensed' });
	registerFont('/Users/agm/Library/Fonts/BarlowCondensed-Light.ttf', { family: 'Barlow Condensed' });
	registerFont('/Users/agm/Library/Fonts/BarlowCondensed-Regular.ttf', { family: 'Barlow Condensed' });
	context.font = `${styleText} ${size}px "${font}"`;

}

export function drawImageWithColor(ctx: CanvasRenderingContext2D, image: Image, color: string, x: number, y: number, w: number, h: number): void {
	// https://stackoverflow.com/q/45187291

	const canvas2 = createCanvas(w, h);
	const ctx2 = canvas2.getContext('2d');
	ctx2.drawImage(image, 0, 0, w, h);
	ctx2.globalCompositeOperation = 'source-in';
	ctx2.fillStyle = color;
	ctx2.fillRect(0, 0, w, h);

	ctx.drawImage(canvas2, x, y);
}