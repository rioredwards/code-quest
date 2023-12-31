import { ChoiceMap } from '../../utils/choiceRelations';
import { TechChoiceIdx } from '../choiceIdxs/techIdxs';
import { TypeChoiceIdx } from '../choiceIdxs/typeIdxs';

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

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

export const typeToTech: ChoiceMap = {
  [LEETCODE]: [
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
  ],
  [CLI]: [PYTHON, JAVA, C, CPP, CSHARP, GO, RUST, PHP, RUBY, SWIFT, DART, BASH, NODE],
  [FRONTEND]: [JAVASCRIPT, TYPESCRIPT, PYTHON, REACT, ANGULAR, VUE, NEXT],
  [FULLSTACK]: [JAVASCRIPT, TYPESCRIPT, PYTHON, NEXT, DJANGO, SPRING, RAILS, LARAVEL, DOTNET],
  [BACKEND]: [NEST, NODE, DJANGO, SPRING, LARAVEL, DOTNET, GIN],
  [CLOUD]: [JAVASCRIPT, TYPESCRIPT, REACT, ANGULAR, VUE, NEXT, DJANGO, RAILS, LARAVEL, DOTNET],
};
