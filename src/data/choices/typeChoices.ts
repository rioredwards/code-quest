import { Choice } from "../../types";
import { TimeChoiceIdx } from "../choiceEnums/timeEnum";

const {
  THIRTY_M,
  FORTY_FIVE_M,
  ONE_H,
  NINETY_M,
  TWO_H,
  THREE_H,
  FOUR_H,
  FIVE_H,
  SIX_H,
  INFINITY,
} = TimeChoiceIdx;

const leetCodeTasks: number[] = [0, 1, 2, 3, 4];
const CLITasks: number[] = [5, 6, 7, 8, 9];
const frontendTasks: number[] = [10, 11, 12, 13, 14];
const fullstackTasks: number[] = [15, 16, 17, 18, 19];
const backendTasks: number[] = [20, 21, 22, 23, 24];
const cloudTasks: number[] = [25, 26, 27, 28, 29];

export const leetCodeEasy: TimeChoiceIdx[] = [THIRTY_M, FORTY_FIVE_M, ONE_H];
export const leetCodeMedium: TimeChoiceIdx[] = [FORTY_FIVE_M, ONE_H, NINETY_M];

export const CLIEasy: TimeChoiceIdx[] = [ONE_H, NINETY_M, TWO_H];
export const CLIMedium: TimeChoiceIdx[] = [NINETY_M, TWO_H, THREE_H];
export const CLIHard: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];

export const frontendEasy: TimeChoiceIdx[] = [NINETY_M, TWO_H, THREE_H];
export const frontendMedium: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const frontendHard: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const fullstackEasy: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const fullstackMedium: TimeChoiceIdx[] = [FOUR_H, FIVE_H, SIX_H];
export const fullstackHard: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const backendEasy: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];
export const backendMedium: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const backendHard: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const cloudEasy: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];
export const cloudMedium: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const cloudHard: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

const leetCodeTimes: number[] = Array.from(
  new Set([...leetCodeEasy, ...leetCodeMedium])
);
const CLITimes: number[] = Array.from(
  new Set([...CLIEasy, ...CLIMedium, ...CLIHard])
);
const frontendTimes: number[] = Array.from(
  new Set([...frontendEasy, ...frontendMedium, ...frontendHard])
);
const fullstackTimes: number[] = Array.from(
  new Set([...fullstackEasy, ...fullstackMedium, ...fullstackHard])
);
const backendTimes: number[] = Array.from(
  new Set([...backendEasy, ...backendMedium, ...backendHard])
);
const cloudTimes: number[] = Array.from(
  new Set([...cloudEasy, ...cloudMedium, ...cloudHard])
);

export const typeChoices: Choice[] = [
  {
    id: 0,
    name: "Leetcode",
    sentenceName: "Leetcode",
    compatibleWith: {
      TASK: leetCodeTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeTimes,
    },
  },
  {
    id: 1,
    name: "CLI",
    sentenceName: "CLI",
    compatibleWith: {
      TASK: CLITasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLITimes,
    },
  },
  {
    id: 2,
    name: "Frontend",
    sentenceName: "Frontend",
    compatibleWith: {
      TASK: frontendTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendTimes,
    },
  },
  {
    id: 3,
    name: "Fullstack",
    sentenceName: "Fullstack",
    compatibleWith: {
      TASK: fullstackTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackTimes,
    },
  },
  {
    id: 4,
    name: "Backend",
    sentenceName: "Backend",
    compatibleWith: {
      TASK: backendTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendTimes,
    },
  },
  {
    id: 5,
    name: "Cloud",
    sentenceName: "Cloud",
    compatibleWith: {
      TASK: cloudTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudTimes,
    },
  },
];
