import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { logCompatibilities } from "./Logging";
import { timeToTech } from "./TimeToTech";

export const techToTime = reverseChoiceCompatibilityMap(timeToTech);

logCompatibilities(techToTime, TechChoiceIdx, TimeChoiceIdx);
