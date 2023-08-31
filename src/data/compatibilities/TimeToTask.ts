import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { ValuesOf } from "../../utils/utilityTypes";
import { taskToTime } from "./TaskToTime";

type TimeToTask = {
  [key in `${ValuesOf<typeof TimeChoiceIdx>}`]: TaskChoiceIdx[];
};

export const timeToTask: TimeToTask = {} as TimeToTask;

for (const [task, times] of Object.entries(taskToTime) as [
  keyof typeof taskToTime,
  TimeChoiceIdx[]
][]) {
  if (!times) throw new Error("Times not found in taskToTime");

  times.forEach((time) => {
    if (timeToTask[time] === undefined) {
      timeToTask[time] = [];
    }
    timeToTask[time]!.push(Number(task));
  });
}
