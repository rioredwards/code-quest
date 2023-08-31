import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { logCompatibilities } from "./Logging";
import { typeToTask } from "./TypeToTask";

export const taskToType = reverseChoiceCompatibilityMap(typeToTask);

logCompatibilities(taskToType, TaskChoiceIdx, TypeChoiceIdx);
