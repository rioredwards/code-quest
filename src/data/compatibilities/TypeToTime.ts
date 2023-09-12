import { TypeChoiceIdx } from '../choiceIdxs/typeIdxs';
import { TimeChoiceIdx } from '../choiceIdxs/timeIdxs';
import { timeToType } from './TimeToType';
import { reverseChoiceCompatibilityMap } from '../../utils/choiceRelations';
import { logChoiceCompatibilities } from '../../logging';

export const typeToTime = reverseChoiceCompatibilityMap(timeToType);

logChoiceCompatibilities(typeToTime, TypeChoiceIdx, TimeChoiceIdx);
