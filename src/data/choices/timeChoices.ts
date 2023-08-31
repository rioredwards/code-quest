import { Choice } from "../../types";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";
import { timeToTask } from "../compatibilities/TimeToTask";
import { timeToTech } from "../compatibilities/TimeToTech";
import { timeToType } from "../compatibilities/TimeToType";

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
      TYPE: timeToType[THIRTY_M],
      TASK: timeToTask[THIRTY_M],
      TIME: timeToTech[THIRTY_M],
    },
  },
  {
    id: FORTY_FIVE_M,
    name: "45 Min",
    sentenceName: "45 Minutes",
    compatibleWith: {
      TYPE: timeToType[FORTY_FIVE_M],
      TASK: timeToTask[FORTY_FIVE_M],
      TIME: timeToTech[FORTY_FIVE_M],
    },
  },
  {
    id: ONE_H,
    name: "1 Hour",
    sentenceName: "1 Hour",
    compatibleWith: {
      TYPE: timeToType[ONE_H],
      TASK: timeToTask[ONE_H],
      TIME: timeToTech[ONE_H],
    },
  },
  {
    id: NINETY_M,
    name: "90 Min",
    sentenceName: "90 Minutes",
    compatibleWith: {
      TYPE: timeToType[NINETY_M],
      TASK: timeToTask[NINETY_M],
      TIME: timeToTech[NINETY_M],
    },
  },
  {
    id: TWO_H,
    name: "2 Hours",
    sentenceName: "2 Hours",
    compatibleWith: {
      TYPE: timeToType[TWO_H],
      TASK: timeToTask[TWO_H],
      TIME: timeToTech[TWO_H],
    },
  },
  {
    id: THREE_H,
    name: "3 Hours",
    sentenceName: "3 Hours",
    compatibleWith: {
      TYPE: timeToType[THREE_H],
      TASK: timeToTask[THREE_H],
      TIME: timeToTech[THREE_H],
    },
  },
  {
    id: FOUR_H,
    name: "4 Hours",
    sentenceName: "4 Hours",
    compatibleWith: {
      TYPE: timeToType[FOUR_H],
      TASK: timeToTask[FOUR_H],
      TIME: timeToTech[FOUR_H],
    },
  },
  {
    id: FIVE_H,
    name: "5 Hours",
    sentenceName: "5 Hours",
    compatibleWith: {
      TYPE: timeToType[FIVE_H],
      TASK: timeToTask[FIVE_H],
      TIME: timeToTech[FIVE_H],
    },
  },
  {
    id: SIX_H,
    name: "6 Hours",
    sentenceName: "6 Hours",
    compatibleWith: {
      TYPE: timeToType[SIX_H],
      TASK: timeToTask[SIX_H],
      TIME: timeToTech[SIX_H],
    },
  },
  {
    id: INFINITY,
    name: "∞",
    sentenceName: "Unlimited Time",
    compatibleWith: {
      TYPE: timeToType[INFINITY],
      TASK: timeToTask[INFINITY],
      TIME: timeToTech[INFINITY],
    },
  },
];
