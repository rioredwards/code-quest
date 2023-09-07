import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { logChoiceCompatibilities } from "../../logging";
import { techToTask } from "./TechToTask";

export const taskToTech = reverseChoiceCompatibilityMap(techToTask);

logChoiceCompatibilities(taskToTech, TaskChoiceIdx, TechChoiceIdx);
