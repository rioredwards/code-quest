import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceEnums/taskEnum";
import { TechChoiceIdx } from "../choiceEnums/techEnum";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";
import { typeToTask } from "./TypeTask";
import { techToType } from "./TypeTech.";

type TechToTask = {
  [key in `${ValuesOf<typeof TechChoiceIdx>}`]: TaskChoiceIdx[];
};

type TaskToTech = {
  [key in `${ValuesOf<typeof TaskChoiceIdx>}`]: TechChoiceIdx[];
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

export const taskToTech: TaskToTech = {} as TaskToTech;

for (const [tech, tasks] of Object.entries(techToTask) as [
  keyof typeof techToTask,
  TaskChoiceIdx[]
][]) {
  if (!tasks) throw new Error("Tasks not found in techToTask");

  tasks.forEach((task) => {
    if (taskToTech[task] === undefined) {
      taskToTech[task] = [];
    }
    taskToTech[task]!.push(Number(tech));
  });
}
