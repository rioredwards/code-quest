import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToTask } from "./TimeToTask";
import { taskToTech } from "./TaskToTech";
import { logCompatibilities } from "./Logging";
import { mergeChoiceCompatibilityMapsViaIntermediateMap } from "../../utils/choiceRelations";

export const timeToTech = mergeChoiceCompatibilityMapsViaIntermediateMap(
  timeToTask,
  taskToTech
);

logCompatibilities(timeToTech, TimeChoiceIdx, TechChoiceIdx);
