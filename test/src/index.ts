import carded = require('@messman/carded');
const { process, Rank, Suit } = carded;
import * as path from 'path';

process({
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
					rank: Rank.joker,
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
});