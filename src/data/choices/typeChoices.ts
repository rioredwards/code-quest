import { Choice } from "../../types";

export enum TypeChoiceIdx {
  LEETCODE = 0,
  CLI = 1,
  FRONTEND = 2,
  FULLSTACK = 3,
  BACKEND = 4,
  CLOUD = 5,
}

export const typeChoices: Choice[] = [
  {
    id: 0,
    name: "Leetcode",
    sentenceName: "Leetcode",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 1,
    name: "CLI",
    sentenceName: "CLI",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 2,
    name: "Frontend",
    sentenceName: "Frontend",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 3,
    name: "Fullstack",
    sentenceName: "Fullstack",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 4,
    name: "Backend",
    sentenceName: "Backend",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 5,
    name: "Cloud",
    sentenceName: "Cloud",
    compatibleWith: {
      TASK: [0, 1, 2, 3, 4, 5],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
];
