export function getCSSVar(el: HTMLElement, varName: string): string {
  const style = window.getComputedStyle(el);
  const myVarValue = style.getPropertyValue(varName);
  if (!myVarValue) throw new Error("Variable not found");

  return myVarValue;
}

export function sliceNumAndUnitFromCSSVar(varVal: string): [number, string] {
  const matches = varVal.match(/(\d+(?:\.\d+)?)([a-z%]*)/);

  if (!matches) throw new Error("Invalid format of the CSS variable");

  const numberValue = parseFloat(matches[1]);
  const unit = matches[2];

  return [numberValue, unit];
}

export function getNumFr(el: HTMLElement): [number, string] {
  const style = window.getComputedStyle(el);
  const height = style.getPropertyValue("height");
  return sliceNumAndUnitFromCSSVar(height);
}

export function getComputedDOMElementHeight(el: HTMLElement): [number, string] {
  const style = window.getComputedStyle(el);
  const height = style.getPropertyValue("height");
  return sliceNumAndUnitFromCSSVar(height);
}

export function convertVHtoPX(vh: number, height: number): number {
  return (vh * height) / 100;
}

export function convertPXtoVH(px: number, height: number): number {
  return (px * 100) / height;
}
