import { Canvas, CanvasRenderingContext2D, createCanvas, Image, registerFont } from 'canvas';
import { cardConstants } from './card';

export function create(): [Canvas, CanvasRenderingContext2D] {
	const { fullArea, scaleFactor } = cardConstants;
	const canvas = createCanvas(fullArea.width * scaleFactor, fullArea.height * scaleFactor);
	return [canvas, canvas.getContext('2d')];
}

registerFont('/Users/agm/Library/Fonts/BarlowCondensed-Regular.ttf', { family: 'Barlow Condensed Regular' });
registerFont('/Users/agm/Library/Fonts/BarlowCondensed-Medium.ttf', { family: 'Barlow Condensed Medium' });
registerFont('/Users/agm/Library/Fonts/BarlowCondensed-SemiBold.ttf', { family: 'Barlow Condensed SemiBold' });

export function setFont(context: CanvasRenderingContext2D, size: number, font: string, style?: string | number): void {
	const styleText = style ? `${style} ` : '';
	context.font = `${styleText} ${size}px "${font}"`;
}

export function drawImageWithColor(ctx: CanvasRenderingContext2D, changeToBlackAndTransparent: boolean, image: Image, color: string, x: number, y: number, w: number, h: number): void {
	// https://stackoverflow.com/q/45187291

	const canvas2 = createCanvas(w, h);
	const ctx2 = canvas2.getContext('2d');
	ctx2.drawImage(image, 0, 0, w, h);

	if (changeToBlackAndTransparent) {
		/*
			Here's the deal: some images, like the spotify bar code, are an SVG
			with white-on-black. We want something more like black-with-transparent.
			We want the white areas to become transparent, for two reasons:
			1. In the next step in this function, we change all non-transparent areas to a uniform color.
			2. We want the transparent areas to use our card's background color (off-white).

			To do this, we do a rudimentary loop through all the pixels.
			During this loop, we will:
			1. Change white to transparent.
			2. Change non-white and non-black (the grays in-between) to black-with-transparency.
		*/

		const imageData = ctx2.getImageData(0, 0, w, h);
		const data = imageData.data;

		// For debug
		//let changedPixels = 0;
		//const totalPixels = data.length;

		for (let i = 0; i < data.length; i += 4) {
			const r = data[i];
			const g = data[i + 1];
			const b = data[i + 2];
			const a = data[i + 3];
			if (r !== 0 && g !== 0 && b !== 0 && a !== 0) {
				//changedPixels++;
				// Change to black with transparency.
				data[i] = 0;
				data[i + 1] = 0;
				data[i + 2] = 0;
				data[i + 3] = 255 - Math.round((r + g + b) / 3);
			}
		}
		ctx2.putImageData(imageData, 0, 0);

		//console.log('white-to-transparent', changedPixels, totalPixels, (changedPixels / totalPixels).toFixed(2));
	}

	// Use source-in to color areas with non-transparent pixels to be the chosen color.
	ctx2.globalCompositeOperation = 'source-in';
	ctx2.fillStyle = color;
	ctx2.fillRect(0, 0, w, h);

	ctx.drawImage(canvas2, x, y);
}