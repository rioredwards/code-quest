import { taskToTime } from "./TaskToTime";
import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { logCompatibilities } from "./Logging";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";

export const timeToTask = reverseChoiceCompatibilityMap(taskToTime);

logCompatibilities(timeToTask, TimeChoiceIdx, TaskChoiceIdx);
