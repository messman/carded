import { ProcessInputDesign } from '../../models';
import { drawCard } from './draw';
import { cards } from './input';
import { TestEmptyCardDesign, TestEmptyCardDesignerInput } from './shared';

export const testEmptyDesign: ProcessInputDesign<TestEmptyCardDesignerInput, TestEmptyCardDesign> = {
	name: "Empty Test",
	cards: cards,
	drawCardFunc: drawCard,
	designerInput: {},
	outputPrefix: 'test-empty'
};
