import { loadImage, Image } from 'canvas';

export interface LoadSpotifyCodeInput {
	width: number;
	spotifyUri: string;
}

// Example: https://scannables.scdn.co/uri/plain/svg/000000/white/640/spotify:track:6cFZ4PLC19taNlpl9pbGMf
const backgroundColor = '000000';
const foregroundColor = 'white';
const imageType = 'svg';
const uriPrefix = 'https://scannables.scdn.co/uri/plain';

export async function loadSpotifyCode(input: LoadSpotifyCodeInput): Promise<Image> {
	const { width, spotifyUri } = input;
	const uri = `${uriPrefix}/${imageType}/${backgroundColor}/${foregroundColor}/${width}/${spotifyUri}`;
	return await loadImage(uri);
}

const sampleCode = require('@/static/icons/sample-code.svg').default as string;
const sampleBuffer = Buffer.from(sampleCode, 'utf-8');
export async function loadSampleSpotifyCode(): Promise<Image> {
	return await loadImage(sampleBuffer);
}