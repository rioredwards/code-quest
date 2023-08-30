import { Choice } from "../../types";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";
import {
  CLIEasyTasks,
  CLIHardTasks,
  CLIMediumTasks,
  frontendEasyTasks,
  frontendHardTasks,
  frontendMediumTasks,
  fullstackEasyTasks,
  fullstackMediumTasks,
  fullstackHardTasks,
  leetCodeEasyTasks,
  leetCodeMediumTasks,
  backendEasyTasks,
  backendMediumTasks,
  backendHardTasks,
  cloudEasyTasks,
  cloudMediumTasks,
  cloudHardTasks,
} from "./taskChoices";

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

const thirtyMinTasks = [...leetCodeEasyTasks];
const fortyFiveMinTasks = [...leetCodeEasyTasks, ...leetCodeMediumTasks];
const oneHourTasks = [
  ...leetCodeEasyTasks,
  ...leetCodeMediumTasks,
  ...CLIEasyTasks,
];
const ninetyMinTasks = [
  ...leetCodeMediumTasks,
  ...CLIEasyTasks,
  ...CLIMediumTasks,
  ...frontendEasyTasks,
];
const twoHourTasks = [
  ...CLIEasyTasks,
  ...CLIMediumTasks,
  ...CLIHardTasks,
  ...frontendEasyTasks,
  ...backendEasyTasks,
  ...cloudEasyTasks,
];
const threeHourTasks = [
  ...CLIMediumTasks,
  ...CLIHardTasks,
  ...frontendEasyTasks,
  ...frontendMediumTasks,
  ...fullstackEasyTasks,
  ...backendEasyTasks,
  ...backendMediumTasks,
  ...cloudEasyTasks,
  ...cloudMediumTasks,
];
const fourHourTasks = [
  ...CLIHardTasks,
  ...frontendMediumTasks,
  ...fullstackEasyTasks,
  ...fullstackMediumTasks,
  ...backendEasyTasks,
  ...backendMediumTasks,
  ...cloudEasyTasks,
  ...cloudMediumTasks,
];
const fiveHourTasks = [
  ...frontendMediumTasks,
  ...frontendHardTasks,
  ...fullstackEasyTasks,
  ...fullstackMediumTasks,
  ...fullstackHardTasks,
  ...backendMediumTasks,
  ...backendHardTasks,
  ...cloudMediumTasks,
  ...cloudHardTasks,
];
const sixHourTasks = [
  ...frontendHardTasks,
  ...fullstackMediumTasks,
  ...fullstackHardTasks,
  ...backendHardTasks,
  ...cloudHardTasks,
];
const infiniteTimeTasks = [
  ...frontendHardTasks,
  ...fullstackHardTasks,
  ...backendHardTasks,
  ...cloudHardTasks,
];

export const timeChoices: Choice[] = [
  {
    id: 0,
    name: "30 Min",
    sentenceName: "30 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE],
      TASK: thirtyMinTasks,
      TECH: undefined,
    },
  },
  {
    id: 1,
    name: "45 Min",
    sentenceName: "45 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE],
      TASK: fortyFiveMinTasks,
      TECH: undefined,
    },
  },
  {
    id: 2,
    name: "1 Hour",
    sentenceName: "1 Hour",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: oneHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 3,
    name: "90 Min",
    sentenceName: "90 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE, CLI, FRONTEND],
      TASK: ninetyMinTasks,
      TECH: undefined,
    },
  },
  {
    id: 4,
    name: "2 Hours",
    sentenceName: "2 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, BACKEND, CLOUD],
      TASK: twoHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 5,
    name: "3 Hours",
    sentenceName: "3 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: threeHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 6,
    name: "4 Hours",
    sentenceName: "4 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: fourHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 7,
    name: "5 Hours",
    sentenceName: "5 Hours",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: fiveHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 8,
    name: "6 Hours",
    sentenceName: "6 Hours",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: sixHourTasks,
      TECH: undefined,
    },
  },
  {
    id: 9,
    name: "∞",
    sentenceName: "Unlimited Time",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: infiniteTimeTasks,
      TECH: undefined,
    },
  },
];
