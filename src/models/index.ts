import { Canvas, CanvasRenderingContext2D } from 'canvas';

//#region Card Basics

export enum Rank {
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
	spades,
	clubs,
	hearts,
	diamonds
}

export enum SpecialRank {
	joker1,
	joker2,
}

export interface CardMarkWithSuit {
	rank: Rank;
	suit: Suit;
}

export interface CardMarkSpecialRank {
	specialRank: SpecialRank;
}

export function isCardMarkSpecialRank(value: CardMark | null | undefined): value is CardMarkSpecialRank {
	return !!value && (value as CardMarkSpecialRank).specialRank !== undefined;
}

export type CardMark = CardMarkWithSuit | CardMarkSpecialRank;

//#endregion

export interface ProcessInput<TDesigner, TCardDesign> {
	meta: ProcessInputMeta;
	design: ProcessInputDesign<TDesigner, TCardDesign>;
}

export interface ProcessInputMeta {
	isDebug: boolean;
	/** Absolute. */
	outputDirectory: string;
	stopOnError: boolean;
}

export interface ProcessInputDesign<TDesigner, TCardDesign> {
	name: string;
	drawCardFunc: CardDesignerDrawCard<TDesigner, TCardDesign>;
	designerInput: TDesigner;
	outputPrefix: string;
	cards: Card<TCardDesign>[];
}

export interface Card<TCardDesign> {
	mark: CardMark;
	skip: boolean;
	design: TCardDesign;
}

export type CardDesignerDrawCard<TDesigner, TCardDesign> = (input: DrawCardInput<TDesigner, TCardDesign>) => Promise<DrawCardOutput>;

export interface DrawCardInput<TDesigner, TCardDesign> {
	input: ProcessInput<TDesigner, TCardDesign>;
	index: number;
	card: Card<TCardDesign>;
	canvas: Canvas;
	context: CanvasRenderingContext2D;
}

export interface ProcessOutput {
	cards: DrawCardOutput[];
}

export interface DrawCardOutput {
	mark: CardMark;
	outputStatus: DrawCardOutputStatus;
	outputStatusMessage: string | null;
}

export enum DrawCardOutputStatus {
	ok,
	duplicate,
	skipped,
	error
}