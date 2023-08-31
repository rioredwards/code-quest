import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { techToType } from "./TechToType";
import { typeToTask } from "./TypeToTask";

type TechToTask = {
  [key in `${ValuesOf<typeof TechChoiceIdx>}`]: TaskChoiceIdx[];
};

export const techToTask: TechToTask = {} as TechToTask;

for (const [tech, types] of Object.entries(techToType) as [
  keyof typeof techToType,
  TypeChoiceIdx[]
][]) {
  if (!types) throw new Error("Types not found in techToType");

  types.forEach((type) => {
    const tasks = typeToTask[type];
    if (!tasks) throw new Error("Tasks not found in typeToTask");

    if (techToTask[tech] === undefined) {
      techToTask[tech] = [];
    }
    techToTask[tech].push(...tasks);
  });
}
