import { CHOICE_HEIGHT_VH } from '../motionConfigs/reelMotion';
import { convertVHtoPX } from './DOMUtils';

export function getReelDimensions(windowHeight: number, numChoices: number) {
  const choiceHeight = getChoiceHeightPx(windowHeight, CHOICE_HEIGHT_VH);
  const reelHeight = getReelHeightPx(choiceHeight, numChoices);
  return { choiceHeight, reelHeight };
}

function getReelHeightPx(choicesHeight: number, choicesLength: number): number {
  return choicesHeight * choicesLength;
}

function getChoiceHeightPx(windowHeightPx: number, choiceVh: number): number {
  const choiceHeightInVh = choiceVh;
  const choiceHeightPx = convertVHtoPX(choiceHeightInVh, windowHeightPx);
  return choiceHeightPx;
}
