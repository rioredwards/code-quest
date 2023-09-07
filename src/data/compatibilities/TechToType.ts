import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { logChoiceCompatibilities } from "../../logging";
import { typeToTech } from "./TypeToTech.";

export const techToType = reverseChoiceCompatibilityMap(typeToTech);

logChoiceCompatibilities(techToType, TechChoiceIdx, TypeChoiceIdx);
