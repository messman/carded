export interface Options<CD extends CardDesign> {
	width: number;
	height: number;
	decks: Deck<CD>[];
}

export interface Deck<CD extends CardDesign> {
	outputAbsoluteDirectory: string;
	outputDeckPrefix: string;
	cards: Card<CD>[];
}

export enum Rank {
	joker,
	ace,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	ten,
	jack,
	queen,
	king
}

export enum Suit {
	spade,
	club,
	heart,
	diamond
}

export interface RankSuit {
	rank: Rank;
	suit: Suit;
}

export interface Card<CD extends CardDesign> extends RankSuit {
	design: CD;
}

export interface CardDesign {
	debug?: string;
}

export interface CardDesigner<CD extends CardDesign> {
	processDeck(options: Options<CD>, deck: Deck<CD>): Promise<DeckOutput<CD>>;
}

export enum CardOutputStatus {
	ok,
	duplicate,
	unspecified,
	error
}

export interface CardOutput<CD extends CardDesign> extends Card<CD> {
	outputStatus: CardOutputStatus;
	outputStatusMessage?: string | null;
}

export interface DeckOutput<CD extends CardDesign> {
	cards: CardOutput<CD>[];
}