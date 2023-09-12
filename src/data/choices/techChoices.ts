import { Choice } from '../../types';
import { TechChoiceIdx } from '../choiceIdxs/techIdxs';
import { techToTask } from '../compatibilities/TechToTask';
import { techToTime } from '../compatibilities/TechToTime';
import { techToType } from '../compatibilities/TechToType';

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
    name: 'Javascript',
    sentenceName: 'Javascript',
    compatibleWith: {
      TYPE: techToType[JAVASCRIPT],
      TASK: techToTask[JAVASCRIPT],
      TIME: techToTime[JAVASCRIPT],
    },
  },
  {
    id: TYPESCRIPT,
    name: 'Typescript',
    sentenceName: 'Typescript',
    compatibleWith: {
      TYPE: techToType[TYPESCRIPT],
      TASK: techToTask[TYPESCRIPT],
      TIME: techToTime[TYPESCRIPT],
    },
  },
  {
    id: PYTHON,
    name: 'Python',
    sentenceName: 'Python',
    compatibleWith: {
      TYPE: techToType[PYTHON],
      TASK: techToTask[PYTHON],
      TIME: techToTime[PYTHON],
    },
  },
  {
    id: JAVA,
    name: 'Java',
    sentenceName: 'Java',
    compatibleWith: {
      TYPE: techToType[JAVA],
      TASK: techToTask[JAVA],
      TIME: techToTime[JAVA],
    },
  },
  {
    id: C,
    name: 'C',
    sentenceName: 'C',
    compatibleWith: {
      TYPE: techToType[C],
      TASK: techToTask[C],
      TIME: techToTime[C],
    },
  },
  {
    id: CPP,
    name: 'C++',
    sentenceName: 'C++',
    compatibleWith: {
      TYPE: techToType[CPP],
      TASK: techToTask[CPP],
      TIME: techToTime[CPP],
    },
  },
  {
    id: CSHARP,
    name: 'C#',
    sentenceName: 'C#',
    compatibleWith: {
      TYPE: techToType[CSHARP],
      TASK: techToTask[CSHARP],
      TIME: techToTime[CSHARP],
    },
  },
  {
    id: GO,
    name: 'Go',
    sentenceName: 'Go',
    compatibleWith: {
      TYPE: techToType[GO],
      TASK: techToTask[GO],
      TIME: techToTime[GO],
    },
  },
  {
    id: RUST,
    name: 'Rust',
    sentenceName: 'Rust',
    compatibleWith: {
      TYPE: techToType[RUST],
      TASK: techToTask[RUST],
      TIME: techToTime[RUST],
    },
  },
  {
    id: PHP,
    name: 'PHP',
    sentenceName: 'PHP',
    compatibleWith: {
      TYPE: techToType[PHP],
      TASK: techToTask[PHP],
      TIME: techToTime[PHP],
    },
  },
  {
    id: RUBY,
    name: 'Ruby',
    sentenceName: 'Ruby',
    compatibleWith: {
      TYPE: techToType[RUBY],
      TASK: techToTask[RUBY],
      TIME: techToTime[RUBY],
    },
  },
  {
    id: SWIFT,
    name: 'Swift',
    sentenceName: 'Swift',
    compatibleWith: {
      TYPE: techToType[SWIFT],
      TASK: techToTask[SWIFT],
      TIME: techToTime[SWIFT],
    },
  },
  {
    id: DART,
    name: 'Dart',
    sentenceName: 'Dart',
    compatibleWith: {
      TYPE: techToType[DART],
      TASK: techToTask[DART],
      TIME: techToTime[DART],
    },
  },
  {
    id: BASH,
    name: 'Bash',
    sentenceName: 'Bash',
    compatibleWith: {
      TYPE: techToType[BASH],
      TASK: techToTask[BASH],
      TIME: techToTime[BASH],
    },
  },
  {
    id: REACT,
    name: 'React',
    sentenceName: 'React',
    compatibleWith: {
      TYPE: techToType[REACT],
      TASK: techToTask[REACT],
      TIME: techToTime[REACT],
    },
  },
  {
    id: ANGULAR,
    name: 'Angular',
    sentenceName: 'Angular',
    compatibleWith: {
      TYPE: techToType[ANGULAR],
      TASK: techToTask[ANGULAR],
      TIME: techToTime[ANGULAR],
    },
  },
  {
    id: VUE,
    name: 'Vue',
    sentenceName: 'Vue',
    compatibleWith: {
      TYPE: techToType[VUE],
      TASK: techToTask[VUE],
      TIME: techToTime[VUE],
    },
  },
  {
    id: NEXT,
    name: 'Next.js',
    sentenceName: 'Next.js',
    compatibleWith: {
      TYPE: techToType[NEXT],
      TASK: techToTask[NEXT],
      TIME: techToTime[NEXT],
    },
  },
  {
    id: NEST,
    name: 'Nest.js',
    sentenceName: 'Nest.js',
    compatibleWith: {
      TYPE: techToType[NEST],
      TASK: techToTask[NEST],
      TIME: techToTime[NEST],
    },
  },
  {
    id: NODE,
    name: 'Node.js',
    sentenceName: 'Node.js',
    compatibleWith: {
      TYPE: techToType[NODE],
      TASK: techToTask[NODE],
      TIME: techToTime[NODE],
    },
  },
  {
    id: DJANGO,
    name: 'Django',
    sentenceName: 'Django',
    compatibleWith: {
      TYPE: techToType[DJANGO],
      TASK: techToTask[DJANGO],
      TIME: techToTime[DJANGO],
    },
  },
  {
    id: SPRING,
    name: 'Spring Boot',
    sentenceName: 'Spring Boot',
    compatibleWith: {
      TYPE: techToType[SPRING],
      TASK: techToTask[SPRING],
      TIME: techToTime[SPRING],
    },
  },
  {
    id: RAILS,
    name: 'Rails',
    sentenceName: 'Ruby on Rails',
    compatibleWith: {
      TYPE: techToType[RAILS],
      TASK: techToTask[RAILS],
      TIME: techToTime[RAILS],
    },
  },
  {
    id: LARAVEL,
    name: 'Laravel',
    sentenceName: 'Laravel',
    compatibleWith: {
      TYPE: techToType[LARAVEL],
      TASK: techToTask[LARAVEL],
      TIME: techToTime[LARAVEL],
    },
  },
  {
    id: DOTNET,
    name: '.NET',
    sentenceName: '.NET',
    compatibleWith: {
      TYPE: techToType[DOTNET],
      TASK: techToTask[DOTNET],
      TIME: techToTime[DOTNET],
    },
  },
  {
    id: GIN,
    name: 'Gin',
    sentenceName: 'Gin',
    compatibleWith: {
      TYPE: techToType[GIN],
      TASK: techToTask[GIN],
      TIME: techToTime[GIN],
    },
  },
];
