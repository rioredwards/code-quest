import { Choice } from "../../types";
import { typeToTask } from "../compatibilities/TypeToTask";
import { TypeChoiceIdx } from "../choiceIdxs/typeIdxs";
import { typeToTech } from "../compatibilities/TypeToTech.";
import { typeToTime } from "../compatibilities/TypeToTime";

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

export const typeChoices: Choice[] = [
  {
    id: LEETCODE,
    name: "Leetcode",
    sentenceName: "Leetcode",
    compatibleWith: {
      TASK: typeToTask[LEETCODE],
      TECH: typeToTech[LEETCODE],
      TIME: typeToTime[LEETCODE],
    },
  },
  {
    id: CLI,
    name: "CLI",
    sentenceName: "CLI",
    compatibleWith: {
      TASK: typeToTask[CLI],
      TECH: typeToTech[CLI],
      TIME: typeToTime[CLI],
    },
  },
  {
    id: FRONTEND,
    name: "Frontend",
    sentenceName: "Frontend",
    compatibleWith: {
      TASK: typeToTask[FRONTEND],
      TECH: typeToTech[FRONTEND],
      TIME: typeToTime[FRONTEND],
    },
  },
  {
    id: FULLSTACK,
    name: "Fullstack",
    sentenceName: "Fullstack",
    compatibleWith: {
      TASK: typeToTask[FULLSTACK],
      TECH: typeToTech[FULLSTACK],
      TIME: typeToTime[FULLSTACK],
    },
  },
  {
    id: BACKEND,
    name: "Backend",
    sentenceName: "Backend",
    compatibleWith: {
      TASK: typeToTask[BACKEND],
      TECH: typeToTech[BACKEND],
      TIME: typeToTime[BACKEND],
    },
  },
  {
    id: 5,
    name: "Cloud",
    sentenceName: "Cloud",
    compatibleWith: {
      TASK: typeToTask[CLOUD],
      TECH: typeToTech[CLOUD],
      TIME: typeToTime[CLOUD],
    },
  },
];
