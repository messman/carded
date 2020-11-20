import { Canvas, createCanvas } from 'canvas';

export interface CreateInput {
	width: number;
	height: number;
}

export function create(input: CreateInput): Canvas {
	const canvas = createCanvas(input.width, input.height);
	return canvas;
}

export function getContext(canvas: Canvas): CanvasRenderingContext2D {
	return canvas.getContext('2d');
}