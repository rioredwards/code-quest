import { TechChoiceIdx } from '../choiceIdxs/techIdxs';
import { TimeChoiceIdx } from '../choiceIdxs/timeIdxs';
import { timeToTask } from './TimeToTask';
import { taskToTech } from './TaskToTech';
import { logChoiceCompatibilities } from '../../logging';
import { mergeChoiceCompatibilityMapsViaIntermediateMap } from '../../utils/choiceRelations';

export const timeToTech = mergeChoiceCompatibilityMapsViaIntermediateMap(timeToTask, taskToTech);

logChoiceCompatibilities(timeToTech, TimeChoiceIdx, TechChoiceIdx);
