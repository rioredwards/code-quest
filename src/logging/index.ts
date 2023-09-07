import { allChoices } from "../data/allChoices";
import { ReelName } from "../types";

export function logCompatibilityScores(
  compatibilityScores: Map<number, number>,
  targetReelName: ReelName
): void {
  if (process.env.NODE_ENV === "production") return;

  console.log("compatibilityScores: ");

  compatibilityScores.forEach((score, idx) => {
    console.log(`${allChoices[targetReelName][idx].sentenceName}: ${score}`);
  });
}

export function logChoiceCompatibilities(obj: any, keyIdxs: any, valIdxs: any) {
  if (process.env.NODE_ENV === "production") return;

  let stringified = {} as any;

  for (let [key, value] of Object.entries(obj)) {
    const keyName = keyIdxs[key as any];

    for (let val of value as any) {
      if (stringified[keyName] === undefined) {
        stringified[keyName] = [];
      }
      stringified[keyName].push(valIdxs[val]);
    }
  }
  console.log(stringified);
}
