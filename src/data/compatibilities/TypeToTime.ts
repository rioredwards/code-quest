import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToType } from "./TimeToType";
import { logCompatibilities } from "./Logging";
import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";

export const typeToTime = reverseChoiceCompatibilityMap(timeToType);

logCompatibilities(typeToTime, TypeChoiceIdx, TimeChoiceIdx);
