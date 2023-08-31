import { ValuesOf } from "../../utils/utilityTypes";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { typeToTech } from "./TypeToTech.";

type TechToType = {
  [key in `${ValuesOf<typeof TechChoiceIdx>}`]: TypeChoiceIdx[];
};

export const techToType: TechToType = {} as TechToType;

for (const [type, techs] of Object.entries(typeToTech) as [
  keyof typeof typeToTech,
  TechChoiceIdx[]
][]) {
  if (!techs) throw new Error("Techs not found in typeToTech");

  techs.forEach((tech) => {
    if (techToType[tech] === undefined) {
      techToType[tech] = [];
    }
    techToType[tech]!.push(Number(type));
  });
}
