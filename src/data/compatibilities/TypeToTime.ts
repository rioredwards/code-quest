import { ValuesOf } from "../../utils/utilityTypes";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToType } from "./TimeToType";

type TypeToTime = {
  [key in `${ValuesOf<typeof TypeChoiceIdx>}`]: TimeChoiceIdx[];
};

export const typeToTime: TypeToTime = {} as TypeToTime;

for (const [time, types] of Object.entries(timeToType) as [
  keyof typeof timeToType,
  TypeChoiceIdx[]
][]) {
  if (!types) throw new Error("Types not found in timeToType");

  types.forEach((type) => {
    if (typeToTime[type] === undefined) {
      typeToTime[type] = [];
    }
    typeToTime[type]!.push(Number(time));
  });
}

console.log("typeToTime: ", typeToTime);
