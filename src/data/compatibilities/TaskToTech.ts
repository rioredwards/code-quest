import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { techToTask } from "./TechToTask";

type TaskToTech = {
  [key in `${ValuesOf<typeof TaskChoiceIdx>}`]: TechChoiceIdx[];
};

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
