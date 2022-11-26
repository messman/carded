import { Card, CardMark, Rank, SpecialRank, Suit } from '../../models';
import { TestEmptyCardDesign } from './shared';

export const cards: Card<TestEmptyCardDesign>[] = [
	...suit(Suit.spades),
	...suit(Suit.clubs),
	...suit(Suit.hearts),
	...suit(Suit.diamonds),
	card({ specialRank: SpecialRank.joker1 }),
	card({ specialRank: SpecialRank.joker2 }),
];

function suit(suit: Suit): Card<TestEmptyCardDesign>[] {
	return [
		card({ suit, rank: Rank.ace }),
		card({ suit, rank: Rank.two }),
		card({ suit, rank: Rank.three }),
		card({ suit, rank: Rank.four }),
		card({ suit, rank: Rank.five }),
		card({ suit, rank: Rank.six }),
		card({ suit, rank: Rank.seven }),
		card({ suit, rank: Rank.eight }),
		card({ suit, rank: Rank.nine }),
		card({ suit, rank: Rank.ten }),
		card({ suit, rank: Rank.jack }),
		card({ suit, rank: Rank.queen }),
		card({ suit, rank: Rank.king }),
	];
}

function card(mark: CardMark): Card<TestEmptyCardDesign> {
	return {
		mark,
		skip: false,
		design: {}
	};
}