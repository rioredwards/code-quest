import { Choice } from "../../types";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";
import {
  CLITasks,
  backendTasks,
  cloudTasks,
  frontendTasks,
  fullstackTasks,
  leetCodeTasks,
} from "./taskChoices";
import {
  frontendTimes,
  leetCodeTimes,
  CLITimes,
  fullstackTimes,
  backendTimes,
  cloudTimes,
} from "./typeChoices";

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

export const techChoices: Choice[] = [
  {
    id: 0,
    name: "Javascript",
    sentenceName: "Javascript",
    compatibleWith: {
      TYPE: [LEETCODE, FRONTEND, FULLSTACK, CLOUD],
      TASK: [
        ...leetCodeTasks,
        ...frontendTasks,
        ...fullstackTasks,
        ...cloudTasks,
      ],
      TIME: [...leetCodeTimes, ...frontendTimes],
    },
  },
  {
    id: 1,
    name: "Typescript",
    sentenceName: "Typescript",
    compatibleWith: {
      TYPE: [LEETCODE, FRONTEND, FULLSTACK, CLOUD],
      TASK: [
        ...leetCodeTasks,
        ...frontendTasks,
        ...fullstackTasks,
        ...cloudTasks,
      ],
      TIME: [
        ...leetCodeTimes,
        ...frontendTimes,
        ...fullstackTimes,
        ...cloudTimes,
      ],
    },
  },
  {
    id: 2,
    name: "Python",
    sentenceName: "Python",
    compatibleWith: {
      TYPE: [LEETCODE, CLI, FRONTEND, FULLSTACK, CLOUD],
      TASK: [
        ...leetCodeTasks,
        ...CLITasks,
        ...frontendTasks,
        ...fullstackTasks,
        ...cloudTasks,
      ],
      TIME: [
        ...leetCodeTimes,
        ...CLITimes,
        ...frontendTimes,
        ...fullstackTimes,
        ...cloudTimes,
      ],
    },
  },
  {
    id: 3,
    name: "Java",
    sentenceName: "Java",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 4,
    name: "C",
    sentenceName: "C",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 5,
    name: "C++",
    sentenceName: "C++",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 6,
    name: "C#",
    sentenceName: "C#",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 7,
    name: "Go",
    sentenceName: "Go",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 8,
    name: "Rust",
    sentenceName: "Rust",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 9,
    name: "PHP",
    sentenceName: "PHP",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 10,
    name: "Ruby",
    sentenceName: "Ruby",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 11,
    name: "Swift",
    sentenceName: "Swift",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 12,
    name: "Dart",
    sentenceName: "Dart",
    compatibleWith: {
      TYPE: [LEETCODE, CLI],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: 13,
    name: "Bash",
    sentenceName: "Bash",
    compatibleWith: {
      TYPE: [CLI],
      TASK: [...CLITasks],
      TIME: [...CLITimes],
    },
  },
  {
    id: 14,
    name: "React",
    sentenceName: "React",
    compatibleWith: {
      TYPE: [FRONTEND, CLOUD],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: 15,
    name: "Angular",
    sentenceName: "Angular",
    compatibleWith: {
      TYPE: [FRONTEND, CLOUD],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: 16,
    name: "Vue",
    sentenceName: "Vue",
    compatibleWith: {
      TYPE: [FRONTEND, CLOUD],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: 17,
    name: "Next.js",
    sentenceName: "Next.js",
    compatibleWith: {
      TYPE: [FRONTEND, FULLSTACK, CLOUD],
      TASK: [...frontendTasks, ...fullstackTimes, ...cloudTasks],
      TIME: [...frontendTimes, ...fullstackTimes, ...cloudTimes],
    },
  },
  {
    id: 18,
    name: "Nest.js",
    sentenceName: "Nest.js",
    compatibleWith: {
      TYPE: [BACKEND],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
  {
    id: 19,
    name: "Node.js",
    sentenceName: "Node.js",
    compatibleWith: {
      TYPE: [CLI, BACKEND],
      TASK: [...CLITasks, ...backendTasks],
      TIME: [...CLITimes, ...backendTimes],
    },
  },
  {
    id: 20,
    name: "Express.js",
    sentenceName: "Express.js",
    compatibleWith: {
      TYPE: [BACKEND],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
  {
    id: 21,
    name: "Django",
    sentenceName: "Django",
    compatibleWith: {
      TYPE: [FULLSTACK, BACKEND],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: 22,
    name: "Spring Boot",
    sentenceName: "Spring Boot",
    compatibleWith: {
      TYPE: [FULLSTACK, BACKEND],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: 23,
    name: "Ruby on Rails",
    sentenceName: "Ruby on Rails",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TASK: [...fullstackTasks],
      TIME: [...fullstackTimes],
    },
  },
  {
    id: 24,
    name: "Laravel",
    sentenceName: "Laravel",
    compatibleWith: {
      TYPE: [FULLSTACK, BACKEND],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: 25,
    name: "ASP.NET Core",
    sentenceName: "ASP.NET Core",
    compatibleWith: {
      TYPE: [FULLSTACK, BACKEND],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: 26,
    name: "Gin",
    sentenceName: "Gin",
    compatibleWith: {
      TYPE: [BACKEND],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
];
