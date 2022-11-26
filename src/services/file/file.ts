import { Canvas } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import { log } from '../log/log';

async function ensureDirectory(filePath: string): Promise<void> {
	const directory = path.dirname(filePath);
	return new Promise((resolve, reject) => {
		fs.mkdir(directory, function (err) {
			if (err) {
				if (err.code == 'EEXIST') {
					resolve();
				}
				else {
					reject(err);
				}
			}
			else {
				resolve();
			}
		});
	});
}

export async function exportCanvasToPNG(canvas: Canvas, outFile: string): Promise<void> {
	await ensureDirectory(outFile);
	const out = fs.createWriteStream(outFile);

	let isPromiseDone = false;
	return new Promise((resolve, reject) => {
		out.on('open', function () {
			const stream = canvas.createPNGStream();
			stream.pipe(out);
		});

		out.on('finish', () => {
			if (isPromiseDone) {
				return;
			}
			isPromiseDone = true;
			resolve();
		});

		out.on('error', (e) => {
			if (isPromiseDone) {
				return;
			}
			isPromiseDone = true;
			log('write error');
			reject(e);
		});
	});
}

const srcDirectoryFromThisFile = "../../";

export function loadAsStringFromSrc(fileFromSrc: string): string {
	return fs.readFileSync(path.join(__dirname, srcDirectoryFromThisFile, fileFromSrc), 'utf-8');
}

export function loadAsStringRelative(dirname: string, fileRelative: string): string {
	return fs.readFileSync(path.join(dirname, fileRelative), 'utf-8');
}