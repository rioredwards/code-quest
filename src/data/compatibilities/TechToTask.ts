import { mergeChoiceCompatibilityMapsViaIntermediateMap } from "../../utils/choiceRelations";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { logCompatibilities } from "./Logging";
import { techToType } from "./TechToType";
import { typeToTask } from "./TypeToTask";

export const techToTask = mergeChoiceCompatibilityMapsViaIntermediateMap(
  techToType,
  typeToTask
);

logCompatibilities(techToTask, TechChoiceIdx, TaskChoiceIdx);
