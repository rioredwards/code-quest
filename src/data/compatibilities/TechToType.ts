import { reverseChoiceCompatibilityMap } from "../../utils/choiceRelations";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { logCompatibilities } from "./Logging";
import { typeToTech } from "./TypeToTech.";

export const techToType = reverseChoiceCompatibilityMap(typeToTech);

logCompatibilities(techToType, TechChoiceIdx, TypeChoiceIdx);
