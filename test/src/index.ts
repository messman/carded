import carded = require('@messman/carded');
const { process, Rank, Suit } = carded;
import * as path from 'path';

process({
	isDevelopment: true,
	isCachingOptions: false,
	calculateOutput: true,
	options: {
		decks: [
			{
				outputAbsoluteDirectory: path.join(__dirname, '../out'),
				outputDeckPrefix: 'empty_',
				cards: [
					{
						rank: Rank.ace,
						suit: Suit.club,
						design: {}
					},
					{
						rank: Rank.ten,
						suit: Suit.heart,
						design: {}
					},
				]
			}
		],
		width: 500,
		height: 500,
	},
	designer: null
});