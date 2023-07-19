import { Choice, ReelName } from "../types";
import { taskChoices } from "./choices/taskChoices";
import { techChoices } from "./choices/techChoices";
import { timeChoices } from "./choices/timeChoices";
import { typeChoices } from "./choices/typeChoices";

type ReelConfig = {
  name: ReelName;
  choices: Choice[];
};

export const reelConfigs: ReelConfig[] = [
  {
    name: "TYPE",
    choices: typeChoices,
  },
  {
    name: "TECH",
    choices: techChoices,
  },
  {
    name: "TASK",
    choices: taskChoices,
  },
  {
    name: "TIME",
    choices: timeChoices,
  },
];
