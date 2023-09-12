import { TypeChoiceIdx } from '../choiceIdxs/typeIdxs';
import { TimeChoiceIdx } from '../choiceIdxs/timeIdxs';
import { timeToTask } from './TimeToTask';
import { taskToType } from './TaskToType';
import { mergeChoiceCompatibilityMapsViaIntermediateMap } from '../../utils/choiceRelations';
import { logChoiceCompatibilities } from '../../logging';

export const timeToType = mergeChoiceCompatibilityMapsViaIntermediateMap(timeToTask, taskToType);

logChoiceCompatibilities(timeToType, TimeChoiceIdx, TypeChoiceIdx);
