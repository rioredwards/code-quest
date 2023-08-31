import { ValuesOf } from "../../utils/utilityTypes";
import { TechChoiceIdx } from "../choiceIdxs/techIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { timeToTask } from "./TimeToTask";
import { taskToTech } from "./TaskToTech";

type TimeToTech = {
  [key in `${ValuesOf<typeof TimeChoiceIdx>}`]: TechChoiceIdx[];
};

export const timeToTech: TimeToTech = {} as TimeToTech;

for (const [time, tasks] of Object.entries(timeToTask) as [
  keyof typeof timeToTask,
  TaskChoiceIdx[]
][]) {
  if (!tasks) throw new Error("Tasks not found in timeToTask");

  tasks.forEach((task) => {
    const techs = taskToTech[task];
    if (!techs) throw new Error("Techs not found in taskToTech");

    if (timeToTech[time] === undefined) {
      timeToTech[time] = [];
    }
    timeToTech[time].push(...techs);
  });
}
