import { Canvas, CanvasRenderingContext2D } from 'canvas';

export interface Options<CD extends CardDesign> {
	isDevelopment?: boolean;
	decks: Deck<CD>[];
	designer: CardDesigner<CD> | null;
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
	none,
	spades,
	clubs,
	hearts,
	diamonds
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

export interface ProcessCardInput<CD extends CardDesign> {
	options: Options<CD>;
	deck: Deck<CD>;
	card: Card<CD>;
	canvas: Canvas;
	context: CanvasRenderingContext2D;
}

export interface CardDesigner<CD extends CardDesign> {
	processCard(input: ProcessCardInput<CD>): Promise<ProcessCardOutput<CD>>;
}

export enum CardOutputStatus {
	ok,
	duplicate,
	unspecified,
	error
}

export interface ProcessCardOutput<CD extends CardDesign> extends Card<CD> {
	outputStatus: CardOutputStatus;
	outputStatusMessage?: string | null;
}