import { ValuesOf } from "../../utils/utilityTypes";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToTech } from "./TimeToTech";
import { timeToType } from "./TimeToType";

type TechToTime = {
  [key in `${ValuesOf<typeof TechChoiceIdx>}`]: TimeChoiceIdx[];
};

export const techToTime: TechToTime = {} as TechToTime;

for (const [time, techs] of Object.entries(timeToTech) as [
  keyof typeof timeToType,
  TechChoiceIdx[]
][]) {
  if (!techs) throw new Error("Techs not found in timeToTech");

  techs.forEach((tech) => {
    if (techToTime[tech] === undefined) {
      techToTime[tech] = [];
    }
    techToTime[tech]!.push(Number(time));
  });
}
