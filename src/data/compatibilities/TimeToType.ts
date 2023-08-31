import { ValuesOf } from "../../utils/utilityTypes";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { timeToTask } from "./TimeToTask";
import { taskToType } from "./TaskToType";

type TimeToType = {
  [key in `${ValuesOf<typeof TimeChoiceIdx>}`]: TypeChoiceIdx[];
};

export const timeToType: TimeToType = {} as TimeToType;

for (const [time, tasks] of Object.entries(timeToTask) as [
  keyof typeof timeToTask,
  TaskChoiceIdx[]
][]) {
  if (!tasks) throw new Error("Tasks not found in timeToTask");

  tasks.forEach((task) => {
    const types = taskToType[task];
    if (!types) throw new Error("Types not found in taskToType");

    if (timeToType[time] === undefined) {
      timeToType[time] = [];
    }
    timeToType[time].push(...types);
  });
}

console.log("timeToType: ", timeToType);
