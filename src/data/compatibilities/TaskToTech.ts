import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { logCompatibilities } from "./Logging";
import { techToTask } from "./TechToTask";

export const taskToTech = reverseChoiceCompatibilityMap(techToTask);

logCompatibilities(taskToTech, TaskChoiceIdx, TechChoiceIdx);
