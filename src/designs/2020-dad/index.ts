import { ProcessInputDesign } from '../../models';
import { drawCard } from './draw';
import { cards } from './input';
import { Dad2020CardDesign, Dad2020CardDesignerInput } from './shared';

export const dad2020Design: ProcessInputDesign<Dad2020CardDesignerInput, Dad2020CardDesign> = {
	name: "2020 Dad Deck",
	cards: cards,
	drawCardFunc: drawCard,
	designerInput: {},
	outputPrefix: 'dad2020'
};