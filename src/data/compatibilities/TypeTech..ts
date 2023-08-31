import { ValuesOf } from "../../utils/utilityTypes";
import { TechChoiceIdx } from "../choiceEnums/techEnum";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";

type TypeToTech = {
  [key in `${ValuesOf<typeof TypeChoiceIdx>}`]: TechChoiceIdx[];
};

type TechToType = {
  [key in `${ValuesOf<typeof TechChoiceIdx>}`]: TypeChoiceIdx[];
};

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

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

export const typeToTech: TypeToTech = {
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
  [CLI]: [
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
    NODE,
  ],
  [FRONTEND]: [JAVASCRIPT, TYPESCRIPT, PYTHON, REACT, ANGULAR, VUE, NEXT],
  [FULLSTACK]: [
    JAVASCRIPT,
    TYPESCRIPT,
    PYTHON,
    NEXT,
    DJANGO,
    SPRING,
    RAILS,
    LARAVEL,
    DOTNET,
  ],
  [BACKEND]: [NEST, NODE, EXPRESS, DJANGO, SPRING, LARAVEL, DOTNET, GIN],
  [CLOUD]: [
    JAVASCRIPT,
    TYPESCRIPT,
    REACT,
    ANGULAR,
    VUE,
    NEXT,
    DJANGO,
    RAILS,
    LARAVEL,
    DOTNET,
  ],
};

export const techToType: TechToType = {} as TechToType;

for (const [type, techs] of Object.entries(typeToTech) as [
  keyof typeof typeToTech,
  TechChoiceIdx[]
][]) {
  if (!techs) throw new Error("Techs not found in typeToTech");

  techs.forEach((tech) => {
    if (techToType[tech] === undefined) {
      techToType[tech] = [];
    }
    techToType[tech]!.push(Number(type));
  });
}
