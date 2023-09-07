import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { logChoiceCompatibilities } from "../../logging";
import { timeToTech } from "./TimeToTech";

export const techToTime = reverseChoiceCompatibilityMap(timeToTech);

logChoiceCompatibilities(techToTime, TechChoiceIdx, TimeChoiceIdx);
