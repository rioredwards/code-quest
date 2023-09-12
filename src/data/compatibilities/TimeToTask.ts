import { taskToTime } from './TaskToTime';
import { reverseChoiceCompatibilityMap } from '../../utils/choiceRelations';
import { logChoiceCompatibilities } from '../../logging';
import { TimeChoiceIdx } from '../choiceIdxs/timeIdxs';
import { TaskChoiceIdx } from '../choiceIdxs/taskIdxs';

export const timeToTask = reverseChoiceCompatibilityMap(taskToTime);

logChoiceCompatibilities(timeToTask, TimeChoiceIdx, TaskChoiceIdx);
