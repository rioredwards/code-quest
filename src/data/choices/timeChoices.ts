import { Choice } from "../../types";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { timeToTask } from "../compatibilities/TimeToTask";

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

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

export const timeChoices: Choice[] = [
  {
    id: THIRTY_M,
    name: "30 Min",
    sentenceName: "30 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE],
      TASK: timeToTask[THIRTY_M],
      TECH: undefined,
    },
  },
  {
    id: FORTY_FIVE_M,
    name: "45 Min",
    sentenceName: "45 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE],
      TASK: timeToTask[FORTY_FIVE_M],
      TECH: undefined,
    },
  },
  {
    id: ONE_H,
    name: "1 Hour",
    sentenceName: "1 Hour",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: timeToTask[ONE_H],
      TECH: undefined,
    },
  },
  {
    id: NINETY_M,
    name: "90 Min",
    sentenceName: "90 Minutes",
    compatibleWith: {
      TYPE: [LEETCODE, CLI, FRONTEND],
      TASK: timeToTask[NINETY_M],
      TECH: undefined,
    },
  },
  {
    id: TWO_H,
    name: "2 Hours",
    sentenceName: "2 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, BACKEND, CLOUD],
      TASK: timeToTask[TWO_H],
      TECH: undefined,
    },
  },
  {
    id: THREE_H,
    name: "3 Hours",
    sentenceName: "3 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: timeToTask[THREE_H],
      TECH: undefined,
    },
  },
  {
    id: FOUR_H,
    name: "4 Hours",
    sentenceName: "4 Hours",
    compatibleWith: {
      TYPE: [CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: timeToTask[FOUR_H],
      TECH: undefined,
    },
  },
  {
    id: FIVE_H,
    name: "5 Hours",
    sentenceName: "5 Hours",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: timeToTask[FIVE_H],
      TECH: undefined,
    },
  },
  {
    id: SIX_H,
    name: "6 Hours",
    sentenceName: "6 Hours",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: timeToTask[SIX_H],
      TECH: undefined,
    },
  },
  {
    id: INFINITY,
    name: "∞",
    sentenceName: "Unlimited Time",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, BACKEND, CLOUD],
      TASK: timeToTask[INFINITY],
      TECH: undefined,
    },
  },
];
