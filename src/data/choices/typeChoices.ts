import { Choice } from "../../types";
import { TimeChoiceIdx } from "../choiceEnums/timeEnum";
import { typeToTask } from "../compatibilities/TypeTask";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";

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

export const leetCodeEasyTime: TimeChoiceIdx[] = [
  THIRTY_M,
  FORTY_FIVE_M,
  ONE_H,
];
export const leetCodeMediumTime: TimeChoiceIdx[] = [
  FORTY_FIVE_M,
  ONE_H,
  NINETY_M,
];

export const CLIEasyTime: TimeChoiceIdx[] = [ONE_H, NINETY_M, TWO_H];
export const CLIMediumTime: TimeChoiceIdx[] = [NINETY_M, TWO_H, THREE_H];
export const CLIHardTime: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];

export const frontendEasyTime: TimeChoiceIdx[] = [NINETY_M, TWO_H, THREE_H];
export const frontendMediumTime: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const frontendHardTime: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const fullstackEasyTime: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const fullstackMediumTime: TimeChoiceIdx[] = [FOUR_H, FIVE_H, SIX_H];
export const fullstackHardTime: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const backendEasyTime: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];
export const backendMediumTime: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const backendHardTime: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const cloudEasyTime: TimeChoiceIdx[] = [TWO_H, THREE_H, FOUR_H];
export const cloudMediumTime: TimeChoiceIdx[] = [THREE_H, FOUR_H, FIVE_H];
export const cloudHardTime: TimeChoiceIdx[] = [FIVE_H, SIX_H, INFINITY];

export const leetCodeTimes: number[] = Array.from(
  new Set([...leetCodeEasyTime, ...leetCodeMediumTime])
);
export const CLITimes: number[] = Array.from(
  new Set([...CLIEasyTime, ...CLIMediumTime, ...CLIHardTime])
);
export const frontendTimes: number[] = Array.from(
  new Set([...frontendEasyTime, ...frontendMediumTime, ...frontendHardTime])
);
export const fullstackTimes: number[] = Array.from(
  new Set([...fullstackEasyTime, ...fullstackMediumTime, ...fullstackHardTime])
);
export const backendTimes: number[] = Array.from(
  new Set([...backendEasyTime, ...backendMediumTime, ...backendHardTime])
);
export const cloudTimes: number[] = Array.from(
  new Set([...cloudEasyTime, ...cloudMediumTime, ...cloudHardTime])
);

const leetCodeTech: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const CLITech: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19];
const frontendTech: number[] = [0, 1, 2, 14, 15, 16, 17];
const fullstackTech: number[] = [0, 1, 2, 17, 21, 22, 23, 24, 25];
const backendTech: number[] = [18, 19, 20, 21, 22, 24, 25, 26];
const cloudTech: number[] = [0, 1, 2, 14, 15, 16, 17];

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

export const typeChoices: Choice[] = [
  {
    id: LEETCODE,
    name: "Leetcode",
    sentenceName: "Leetcode",
    compatibleWith: {
      TASK: typeToTask[LEETCODE],
      TECH: leetCodeTech,
      TIME: leetCodeTimes,
    },
  },
  {
    id: CLI,
    name: "CLI",
    sentenceName: "CLI",
    compatibleWith: {
      TASK: typeToTask[CLI],
      TECH: CLITech,
      TIME: CLITimes,
    },
  },
  {
    id: FRONTEND,
    name: "Frontend",
    sentenceName: "Frontend",
    compatibleWith: {
      TASK: typeToTask[FRONTEND],
      TECH: frontendTech,
      TIME: frontendTimes,
    },
  },
  {
    id: FULLSTACK,
    name: "Fullstack",
    sentenceName: "Fullstack",
    compatibleWith: {
      TASK: typeToTask[FULLSTACK],
      TECH: fullstackTech,
      TIME: fullstackTimes,
    },
  },
  {
    id: BACKEND,
    name: "Backend",
    sentenceName: "Backend",
    compatibleWith: {
      TASK: typeToTask[BACKEND],
      TECH: backendTech,
      TIME: backendTimes,
    },
  },
  {
    id: 5,
    name: "Cloud",
    sentenceName: "Cloud",
    compatibleWith: {
      TASK: typeToTask[CLOUD],
      TECH: cloudTech,
      TIME: cloudTimes,
    },
  },
];
