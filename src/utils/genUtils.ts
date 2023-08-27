export function repeatArray<T>(arr: ReadonlyArray<T>, n: number): T[] {
  return ([] as T[]).concat(...Array(n).fill(arr));
}

export function vhToNum(vh: string): number {
  return parseFloat(vh.slice(0, vh.length - 2));
}

export function numToVh(num: number): string {
  return `${num}vh`;
}

export function getRandIdx(maxIdx: number) {
  return Math.floor(Math.random() * maxIdx);
}
