import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToTask } from "./TimeToTask";
import { taskToType } from "./TaskToType";
import { logCompatibilities } from "./Logging";
import { mergeChoiceCompatibilityMapsViaIntermediateMap } from "../../utils/choiceRelations";

export const timeToType = mergeChoiceCompatibilityMapsViaIntermediateMap(
  timeToTask,
  taskToType
);

logCompatibilities(timeToType, TimeChoiceIdx, TypeChoiceIdx);
