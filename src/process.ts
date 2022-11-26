import * as path from 'path';
import { Card, DrawCardOutput, DrawCardOutputStatus, isCardMarkSpecialRank, ProcessInput, ProcessOutput, Rank, SpecialRank, Suit } from './models';
import { create } from './services/draw/canvas';
import { drawBasicCard } from './services/draw/card';
import { exportCanvasToPNG } from './services/file/export';
import { log } from './services/log/log';

export async function process<T extends ProcessInput<any, any>>(input: T): Promise<ProcessOutput> {
	const { design, meta } = input;
	const { isDebug, stopOnError } = meta;
	const { cards } = design;

	if (isDebug) {
		log('process - debug mode');
	}

	const cardOutputs: DrawCardOutput[] = [];

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		const cardOutput = await processCard(input, card, i);
		cardOutputs.push(cardOutput);
		if (cardOutput.outputStatus === DrawCardOutputStatus.error && stopOnError) {
			log('Stopping on error');
		}
	}

	logOutputs(cardOutputs);

	return {
		cards: cardOutputs
	};
}

async function processCard<TDesigner = any, TCardDesign = any>(input: ProcessInput<TDesigner, TCardDesign>, card: Card<TCardDesign>, index: number): Promise<DrawCardOutput> {
	const { design, meta } = input;
	const { isDebug, outputDirectory } = meta;
	const { outputPrefix, drawCardFunc } = design;
	const { mark, skip } = card;

	if (skip) {
		return Promise.resolve({
			mark,
			outputStatus: DrawCardOutputStatus.skipped,
			outputStatusMessage: null
		});
	}

	const [canvas, ctx] = create();

	drawBasicCard(!!isDebug, card, ctx);

	const output = await drawCardFunc({
		input,
		index,
		card,
		canvas: canvas,
		context: ctx
	});

	if (output.outputStatus === DrawCardOutputStatus.ok) {
		let title: string;
		if (isCardMarkSpecialRank(mark)) {
			title = SpecialRank[mark.specialRank];
		}
		else {
			title = `${Rank[mark.rank]}_${Suit[mark.suit]}`;
		}
		const fileName = `${outputPrefix}-${title}.png`;
		const outputFileName = path.join(outputDirectory, fileName);
		await exportCanvasToPNG(canvas, outputFileName);
	}

	return output;
}

function logOutputs(deckOutput: DrawCardOutput[]): void {
	const statuses: Record<keyof typeof DrawCardOutputStatus, DrawCardOutput[]> = {
		ok: [],
		duplicate: [],
		error: [],
		skipped: []
	};

	deckOutput.forEach((cardOutput) => {
		statuses[DrawCardOutputStatus[cardOutput.outputStatus] as keyof typeof DrawCardOutputStatus].push(cardOutput);
	});

	const statusKeys = Object.keys(statuses);
	statusKeys.forEach((statusKey) => {
		const statusArray = statuses[statusKey as keyof typeof statuses];
		if (statusArray.length) {
			log(`> '${statusKey}': ${statusArray.length}`);
		}
	});
}