import { Canvas, CanvasRenderingContext2D, createCanvas, Image } from 'canvas';
import { cardConstants } from './card';

export function create(): [Canvas, CanvasRenderingContext2D] {
	const canvas = createCanvas(cardConstants.fullArea.width, cardConstants.fullArea.height);
	return [canvas, canvas.getContext('2d')];
}

export function setFont(context: CanvasRenderingContext2D, size: number, font: string): void {
	context.font = `${size}px "${font}", monospace`;
}

export function drawImageWithColor(context: CanvasRenderingContext2D, image: Image, color: string, x: number, y: number, w: number, h: number): void {
	// https://stackoverflow.com/q/45187291
	context.save();
	context.globalCompositeOperation = 'source-over';
	context.drawImage(image, x, y, w, h);
	context.globalCompositeOperation = 'color';
	context.fillStyle = color;
	context.fillRect(x, y, w, h);
	context.restore();
}