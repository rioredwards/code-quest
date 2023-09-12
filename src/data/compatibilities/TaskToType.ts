import { reverseChoiceCompatibilityMap } from '../../utils/choiceRelations';
import { TaskChoiceIdx } from '../choiceIdxs/taskIdxs';
import { TypeChoiceIdx } from '../choiceIdxs/typeIdxs';
import { logChoiceCompatibilities } from '../../logging';
import { typeToTask } from './TypeToTask';

export const taskToType = reverseChoiceCompatibilityMap(typeToTask);

logChoiceCompatibilities(taskToType, TaskChoiceIdx, TypeChoiceIdx);
