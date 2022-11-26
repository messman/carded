
import { CardDesignerDrawCard, DrawCardOutputStatus } from '../../models';
import { TestEmptyCardDesign, TestEmptyCardDesignerInput } from './shared';

export const drawCard: CardDesignerDrawCard<TestEmptyCardDesignerInput, TestEmptyCardDesign> = async (drawContext) => {
	const { card } = drawContext;

	return {
		mark: card.mark,
		outputStatus: DrawCardOutputStatus.ok,
		outputStatusMessage: null
	};
};
