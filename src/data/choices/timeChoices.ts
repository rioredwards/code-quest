import { Choice } from "../../types";

export enum TimeChoiceIdx {
  THIRTY_MIN = 0,
  FORTY_FIVE_MIN = 1,
  ONE_HOUR = 2,
  NINETY_MIN = 3,
  TWO_HOURS = 4,
  THREE_HOURS = 5,
  FOUR_HOURS = 6,
  FIVE_HOURS = 7,
  INFINITY = 8,
}

export const timeChoices: Choice[] = [
  {
    id: 0,
    name: "30 Min",
    sentenceName: "30 Minutes",
    compatibleWith: {
      TYPE: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 1,
    name: "45 Min",
    sentenceName: "45 Minutes",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 2,
    name: "1 Hour",
    sentenceName: "1 Hour",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 3,
    name: "90 Min",
    sentenceName: "90 Minutes",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 4,
    name: "2 Hours",
    sentenceName: "2 Hours",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 5,
    name: "3 Hours",
    sentenceName: "3 Hours",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 6,
    name: "4 Hours",
    sentenceName: "4 Hours",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 7,
    name: "5 Hours",
    sentenceName: "5 Hours",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 8,
    name: "∞",
    sentenceName: "Unlimited Time",
    compatibleWith: {
      TECH: [0, 1, 2, 3, 4, 5],
      TASK: [0, 1, 2, 3, 4, 5],
      TYPE: [0, 1, 2, 3, 4, 5],
    },
  },
];
