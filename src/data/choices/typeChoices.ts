import { Choice } from "../../types";

export enum TypeChoiceIdx {
  LEETCODE = 0,
  CLI = 1,
  FRONTEND = 2,
  FULLSTACK = 3,
  BACKEND = 4,
  CLOUD = 5,
}

const leetCodeTasks: number[] = [0, 1, 2, 3, 4];
const CLITasks: number[] = [5, 6, 7, 8, 9];
const frontendTasks: number[] = [10, 11, 12, 13, 14];
const fullstackTasks: number[] = [15, 16, 17, 18, 19];
const backendTasks: number[] = [20, 21, 22, 23, 24];
const cloudTasks: number[] = [25, 26, 27, 28, 29];

export const typeChoices: Choice[] = [
  {
    id: 0,
    name: "Leetcode",
    sentenceName: "Leetcode",
    compatibleWith: {
      TASK: leetCodeTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 1,
    name: "CLI",
    sentenceName: "CLI",
    compatibleWith: {
      TASK: CLITasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 2,
    name: "Frontend",
    sentenceName: "Frontend",
    compatibleWith: {
      TASK: frontendTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 3,
    name: "Fullstack",
    sentenceName: "Fullstack",
    compatibleWith: {
      TASK: fullstackTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 4,
    name: "Backend",
    sentenceName: "Backend",
    compatibleWith: {
      TASK: backendTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
  {
    id: 5,
    name: "Cloud",
    sentenceName: "Cloud",
    compatibleWith: {
      TASK: cloudTasks,
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: [0, 1, 2, 3, 4, 5],
    },
  },
];
