export type ChoiceMap = {
  [key: string]: number[];
};

export function mergeChoiceCompatibilityMapsViaIntermediateMap(
  oneToTwo: ChoiceMap,
  twoToThree: ChoiceMap
): ChoiceMap {
  const oneToThree: ChoiceMap = {} as ChoiceMap;

  // Merge the two maps
  for (const [choiceOne, choiceTwos] of Object.entries(oneToTwo) as [
    keyof typeof oneToTwo,
    number[]
  ][]) {
    if (!choiceTwos) throw new Error("ChoiceTwos not found in oneToTwo");

    choiceTwos.forEach((choiceTwo) => {
      const choiceThrees = twoToThree[choiceTwo];
      if (!choiceThrees)
        throw new Error("ChoiceThrees not found in twoToThree");

      if (oneToThree[choiceOne] === undefined) {
        oneToThree[choiceOne] = [];
      }

      oneToThree[choiceOne].push(...choiceThrees);
    });
  }

  // Remove possible duplicates from each array of choiceThrees
  for (const [choiceOne, choiceThrees] of Object.entries(oneToThree) as [
    keyof typeof oneToThree,
    number[]
  ][]) {
    if (choiceThrees.length > 1) {
      oneToThree[choiceOne] = Array.from(new Set(choiceThrees));
    }
  }

  return oneToThree;
}

export function reverseChoiceCompatibilityMap(choiceMap: ChoiceMap): ChoiceMap {
  const reversedChoiceMap: ChoiceMap = {} as ChoiceMap;

  for (const [choiceOne, choiceTwos] of Object.entries(choiceMap) as [
    keyof typeof choiceMap,
    number[]
  ][]) {
    if (!choiceTwos) throw new Error("ChoiceTwos not found in choiceMap");

    choiceTwos.forEach((choiceTwo) => {
      if (reversedChoiceMap[choiceTwo] === undefined) {
        reversedChoiceMap[choiceTwo] = [];
      }

      reversedChoiceMap[choiceTwo].push(Number(choiceOne));
    });
  }

  return reversedChoiceMap;
}
