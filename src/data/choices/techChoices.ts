import { Choice } from "../../types";
import { TechChoiceIdx } from "../choiceEnums/techEnum";
import { techToType } from "../compatibilities/TypeTech.";
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

const {
  JAVASCRIPT,
  TYPESCRIPT,
  PYTHON,
  JAVA,
  C,
  CPP,
  CSHARP,
  GO,
  RUST,
  PHP,
  RUBY,
  SWIFT,
  DART,
  BASH,
  REACT,
  ANGULAR,
  VUE,
  NEXT,
  NEST,
  NODE,
  EXPRESS,
  DJANGO,
  SPRING,
  RAILS,
  LARAVEL,
  DOTNET,
  GIN,
} = TechChoiceIdx;

export const techChoices: Choice[] = [
  {
    id: JAVASCRIPT,
    name: "Javascript",
    sentenceName: "Javascript",
    compatibleWith: {
      TYPE: techToType[JAVASCRIPT],
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
    id: TYPESCRIPT,
    name: "Typescript",
    sentenceName: "Typescript",
    compatibleWith: {
      TYPE: techToType[TYPESCRIPT],
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
    id: PYTHON,
    name: "Python",
    sentenceName: "Python",
    compatibleWith: {
      TYPE: techToType[PYTHON],
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
    id: JAVA,
    name: "Java",
    sentenceName: "Java",
    compatibleWith: {
      TYPE: techToType[JAVA],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: C,
    name: "C",
    sentenceName: "C",
    compatibleWith: {
      TYPE: techToType[C],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: CPP,
    name: "C++",
    sentenceName: "C++",
    compatibleWith: {
      TYPE: techToType[CPP],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: CSHARP,
    name: "C#",
    sentenceName: "C#",
    compatibleWith: {
      TYPE: techToType[CSHARP],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: GO,
    name: "Go",
    sentenceName: "Go",
    compatibleWith: {
      TYPE: techToType[GO],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: RUST,
    name: "Rust",
    sentenceName: "Rust",
    compatibleWith: {
      TYPE: techToType[RUST],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: PHP,
    name: "PHP",
    sentenceName: "PHP",
    compatibleWith: {
      TYPE: techToType[PHP],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: RUBY,
    name: "Ruby",
    sentenceName: "Ruby",
    compatibleWith: {
      TYPE: techToType[RUBY],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: SWIFT,
    name: "Swift",
    sentenceName: "Swift",
    compatibleWith: {
      TYPE: techToType[SWIFT],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: DART,
    name: "Dart",
    sentenceName: "Dart",
    compatibleWith: {
      TYPE: techToType[DART],
      TASK: [...leetCodeTasks, ...CLITasks],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: BASH,
    name: "Bash",
    sentenceName: "Bash",
    compatibleWith: {
      TYPE: techToType[BASH],
      TASK: [...CLITasks],
      TIME: [...CLITimes],
    },
  },
  {
    id: REACT,
    name: "React",
    sentenceName: "React",
    compatibleWith: {
      TYPE: techToType[REACT],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: ANGULAR,
    name: "Angular",
    sentenceName: "Angular",
    compatibleWith: {
      TYPE: techToType[ANGULAR],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: VUE,
    name: "Vue",
    sentenceName: "Vue",
    compatibleWith: {
      TYPE: techToType[VUE],
      TASK: [...frontendTasks, ...cloudTasks],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: NEXT,
    name: "Next.js",
    sentenceName: "Next.js",
    compatibleWith: {
      TYPE: techToType[NEXT],
      TASK: [...frontendTasks, ...fullstackTimes, ...cloudTasks],
      TIME: [...frontendTimes, ...fullstackTimes, ...cloudTimes],
    },
  },
  {
    id: NEST,
    name: "Nest.js",
    sentenceName: "Nest.js",
    compatibleWith: {
      TYPE: techToType[NEST],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
  {
    id: NODE,
    name: "Node.js",
    sentenceName: "Node.js",
    compatibleWith: {
      TYPE: techToType[NODE],
      TASK: [...CLITasks, ...backendTasks],
      TIME: [...CLITimes, ...backendTimes],
    },
  },
  {
    id: EXPRESS,
    name: "Express.js",
    sentenceName: "Express.js",
    compatibleWith: {
      TYPE: techToType[EXPRESS],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
  {
    id: DJANGO,
    name: "Django",
    sentenceName: "Django",
    compatibleWith: {
      TYPE: techToType[DJANGO],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: SPRING,
    name: "Spring Boot",
    sentenceName: "Spring Boot",
    compatibleWith: {
      TYPE: techToType[SPRING],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: RAILS,
    name: "Ruby on Rails",
    sentenceName: "Ruby on Rails",
    compatibleWith: {
      TYPE: techToType[RAILS],
      TASK: [...fullstackTasks],
      TIME: [...fullstackTimes],
    },
  },
  {
    id: LARAVEL,
    name: "Laravel",
    sentenceName: "Laravel",
    compatibleWith: {
      TYPE: techToType[LARAVEL],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: DOTNET,
    name: "ASP.NET Core",
    sentenceName: "ASP.NET Core",
    compatibleWith: {
      TYPE: techToType[DOTNET],
      TASK: [...fullstackTasks, ...backendTasks],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: GIN,
    name: "Gin",
    sentenceName: "Gin",
    compatibleWith: {
      TYPE: techToType[GIN],
      TASK: [...backendTasks],
      TIME: [...backendTimes],
    },
  },
];
