import { CardDesign, CardDesigner, CardOutputStatus } from '../options/models/models';

export interface EmptyCardDesign extends CardDesign {
	// none
}

export type EmptyCardDesigner = CardDesigner<EmptyCardDesign>;

export const emptyCardDesigner: EmptyCardDesigner = {
	processCard: async (input) => {
		const { card } = input;
		return {
			...card,
			outputStatus: CardOutputStatus.ok
		};
	}
};