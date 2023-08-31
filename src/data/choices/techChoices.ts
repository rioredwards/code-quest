import { Choice } from "../../types";
import { TechChoiceIdx } from "../choiceEnums/techEnum";
import { techToTask } from "../compatibilities/TaskTech";
import { techToType } from "../compatibilities/TypeTech.";
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
      TASK: techToTask[JAVASCRIPT],
      TIME: [...leetCodeTimes, ...frontendTimes],
    },
  },
  {
    id: TYPESCRIPT,
    name: "Typescript",
    sentenceName: "Typescript",
    compatibleWith: {
      TYPE: techToType[TYPESCRIPT],
      TASK: techToTask[TYPESCRIPT],
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
      TASK: techToTask[PYTHON],
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
      TASK: techToTask[JAVA],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: C,
    name: "C",
    sentenceName: "C",
    compatibleWith: {
      TYPE: techToType[C],
      TASK: techToTask[C],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: CPP,
    name: "C++",
    sentenceName: "C++",
    compatibleWith: {
      TYPE: techToType[CPP],
      TASK: techToTask[CPP],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: CSHARP,
    name: "C#",
    sentenceName: "C#",
    compatibleWith: {
      TYPE: techToType[CSHARP],
      TASK: techToTask[CSHARP],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: GO,
    name: "Go",
    sentenceName: "Go",
    compatibleWith: {
      TYPE: techToType[GO],
      TASK: techToTask[GO],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: RUST,
    name: "Rust",
    sentenceName: "Rust",
    compatibleWith: {
      TYPE: techToType[RUST],
      TASK: techToTask[RUST],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: PHP,
    name: "PHP",
    sentenceName: "PHP",
    compatibleWith: {
      TYPE: techToType[PHP],
      TASK: techToTask[PHP],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: RUBY,
    name: "Ruby",
    sentenceName: "Ruby",
    compatibleWith: {
      TYPE: techToType[RUBY],
      TASK: techToTask[RUBY],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: SWIFT,
    name: "Swift",
    sentenceName: "Swift",
    compatibleWith: {
      TYPE: techToType[SWIFT],
      TASK: techToTask[SWIFT],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: DART,
    name: "Dart",
    sentenceName: "Dart",
    compatibleWith: {
      TYPE: techToType[DART],
      TASK: techToTask[DART],
      TIME: [...leetCodeTimes, ...CLITimes],
    },
  },
  {
    id: BASH,
    name: "Bash",
    sentenceName: "Bash",
    compatibleWith: {
      TYPE: techToType[BASH],
      TASK: techToTask[BASH],
      TIME: [...CLITimes],
    },
  },
  {
    id: REACT,
    name: "React",
    sentenceName: "React",
    compatibleWith: {
      TYPE: techToType[REACT],
      TASK: techToTask[REACT],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: ANGULAR,
    name: "Angular",
    sentenceName: "Angular",
    compatibleWith: {
      TYPE: techToType[ANGULAR],
      TASK: techToTask[ANGULAR],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: VUE,
    name: "Vue",
    sentenceName: "Vue",
    compatibleWith: {
      TYPE: techToType[VUE],
      TASK: techToTask[VUE],
      TIME: [...frontendTimes, ...cloudTimes],
    },
  },
  {
    id: NEXT,
    name: "Next.js",
    sentenceName: "Next.js",
    compatibleWith: {
      TYPE: techToType[NEXT],
      TASK: techToTask[NEXT],
      TIME: [...frontendTimes, ...fullstackTimes, ...cloudTimes],
    },
  },
  {
    id: NEST,
    name: "Nest.js",
    sentenceName: "Nest.js",
    compatibleWith: {
      TYPE: techToType[NEST],
      TASK: techToTask[NEST],
      TIME: [...backendTimes],
    },
  },
  {
    id: NODE,
    name: "Node.js",
    sentenceName: "Node.js",
    compatibleWith: {
      TYPE: techToType[NODE],
      TASK: techToTask[NODE],
      TIME: [...CLITimes, ...backendTimes],
    },
  },
  {
    id: EXPRESS,
    name: "Express.js",
    sentenceName: "Express.js",
    compatibleWith: {
      TYPE: techToType[EXPRESS],
      TASK: techToTask[EXPRESS],
      TIME: [...backendTimes],
    },
  },
  {
    id: DJANGO,
    name: "Django",
    sentenceName: "Django",
    compatibleWith: {
      TYPE: techToType[DJANGO],
      TASK: techToTask[DJANGO],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: SPRING,
    name: "Spring Boot",
    sentenceName: "Spring Boot",
    compatibleWith: {
      TYPE: techToType[SPRING],
      TASK: techToTask[SPRING],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: RAILS,
    name: "Ruby on Rails",
    sentenceName: "Ruby on Rails",
    compatibleWith: {
      TYPE: techToType[RAILS],
      TASK: techToTask[RAILS],
      TIME: [...fullstackTimes],
    },
  },
  {
    id: LARAVEL,
    name: "Laravel",
    sentenceName: "Laravel",
    compatibleWith: {
      TYPE: techToType[LARAVEL],
      TASK: techToTask[LARAVEL],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: DOTNET,
    name: "ASP.NET Core",
    sentenceName: "ASP.NET Core",
    compatibleWith: {
      TYPE: techToType[DOTNET],
      TASK: techToTask[DOTNET],
      TIME: [...fullstackTimes, ...backendTimes],
    },
  },
  {
    id: GIN,
    name: "Gin",
    sentenceName: "Gin",
    compatibleWith: {
      TYPE: techToType[GIN],
      TASK: techToTask[GIN],
      TIME: [...backendTimes],
    },
  },
];
