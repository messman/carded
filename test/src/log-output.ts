import { CardOutputStatus, ProcessCardOutput, RankSuit } from '@messman/carded';

export function processDeckOutput(deckIndex: number, deckOutput: ProcessCardOutput<any>[]): void {
	console.log(`deck ${deckIndex}:`);

	const statuses: Record<keyof typeof CardOutputStatus, RankSuit[]> = {
		ok: [],
		duplicate: [],
		error: [],
		skipped: []
	};

	deckOutput.forEach((cardOutput) => {
		statuses[CardOutputStatus[cardOutput.outputStatus] as keyof typeof CardOutputStatus].push(cardOutput);
	});

	const statusKeys = Object.keys(statuses);
	statusKeys.forEach((statusKey) => {
		const statusArray = statuses[statusKey as keyof typeof statuses];
		if (statusArray.length) {
			console.log(`> '${statusKey}': ${statusArray.length}`);
		}
	});
}