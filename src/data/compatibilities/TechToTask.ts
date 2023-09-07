import { mergeChoiceCompatibilityMapsViaIntermediateMap } from "../../utils/choiceRelations";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { logChoiceCompatibilities } from "../../logging";
import { techToType } from "./TechToType";
import { typeToTask } from "./TypeToTask";

export const techToTask = mergeChoiceCompatibilityMapsViaIntermediateMap(
  techToType,
  typeToTask
);

logChoiceCompatibilities(techToTask, TechChoiceIdx, TaskChoiceIdx);
