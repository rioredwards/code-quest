import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { typeToTask } from "./TypeToTask";

type TaskToType = {
  [key in ValuesOf<typeof TaskChoiceIdx>]: TypeChoiceIdx[];
};

export const taskToType: TaskToType = {} as TaskToType;

for (const [type, tasks] of Object.entries(typeToTask)) {
  if (!tasks) throw new Error("Tasks not found in typeToTask");

  tasks.forEach((task) => {
    if (taskToType[task] === undefined) {
      taskToType[task] = [];
    }
    taskToType[task]!.push(Number(type));
  });
}
