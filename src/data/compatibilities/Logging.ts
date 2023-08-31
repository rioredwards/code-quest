export function logCompatibilities(obj: any, keyIdxs: any, valIdxs: any) {
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
