import { EmptyCardDesign, Options, process, Rank, Suit } from '@messman/carded';
import * as path from 'path';
import { processDeckOutput } from './log-output';

export async function processEmpty(): Promise<void> {
	const options: Options<EmptyCardDesign> = {
		isDevelopment: true,
		decks: [
			{
				outputAbsoluteDirectory: path.join(__dirname, '../out'),
				outputDeckPrefix: 'empty_',
				cards: [
					{
						rank: Rank.ace,
						suit: Suit.clubs,
						design: {}
					},
					{
						rank: Rank.joker1,
						suit: Suit.none,
						design: {}
					},
					{
						rank: Rank.ten,
						suit: Suit.hearts,
						design: {}
					},
					{
						rank: Rank.queen,
						suit: Suit.spades,
						design: {}
					},
					{
						rank: Rank.four,
						suit: Suit.diamonds,
						design: {}
					},
				]
			}
		],
		designer: null
	};

	const output = await process(options);
	output.decks.forEach((deck, index) => {
		processDeckOutput(index, deck);
	});
}