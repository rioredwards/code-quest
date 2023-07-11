import { MotionValue } from "framer-motion";

export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 8; // choices per second

export interface ReelMotionBaseParams {
  yShift: MotionValue<number>;
  currYShiftValue: number;
  animate: Function;
}
export interface ReelMotionConfig extends ReelMotionBaseParams {
  reelHeight: number;
  choicesLength: number;
}
export interface ChoiceMotionConfig extends ReelMotionBaseParams {
  choiceHeight: number;
}

const jumpMotion = { duration: 0 };

export async function siftDownOneReel(params: ReelMotionConfig) {
  const { yShift, currYShiftValue, reelHeight, animate, choicesLength } =
    params;
  const newYShift = shiftYByFullReel(currYShiftValue, reelHeight, 1);
  const shiftDur = getIdleSpinDur(choicesLength);
  await animate(yShift, [currYShiftValue, newYShift], {
    duration: shiftDur,
    ease: "linear",
  });
}

export async function jumpUpOneReel(params: ReelMotionConfig) {
  const { yShift, currYShiftValue, reelHeight, animate } = params;
  const newYShift = shiftYByFullReel(currYShiftValue, reelHeight, 1);
  await animate(yShift, [currYShiftValue, newYShift], jumpMotion);
}

export async function shiftByNumChoices(
  params: ChoiceMotionConfig & { numChoices: number }
) {
  const { currYShiftValue, choiceHeight, numChoices } = params;
  const newYShift = shiftYByChoice(currYShiftValue, choiceHeight, numChoices);
  return [currYShiftValue, newYShift, { duration: 0.1 }];
}

export async function shiftDownChoice(params: ChoiceMotionConfig) {
  const { currYShiftValue, choiceHeight } = params;
  const newYShift = shiftYByChoice(currYShiftValue, choiceHeight, 1);
  return [currYShiftValue, newYShift, { duration: 0.1 }];
}

export async function shiftUpChoice(params: ChoiceMotionConfig) {
  const { currYShiftValue, choiceHeight } = params;
  const newYShift = shiftYByChoice(currYShiftValue, choiceHeight, -1);
  return [currYShiftValue, newYShift, { duration: 0.1 }];
}

function getIdleSpinDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

function shiftYByFullReel(
  yShift: number,
  reelHeight: number,
  numReels: number
): number {
  return yShift - reelHeight * numReels;
}

function shiftYByChoice(
  yShift: number,
  choiceHeight: number,
  numChoices: number
): number {
  return yShift - choiceHeight * numChoices;
}

export function translateYShiftToReelCopyIdx(
  yShift: number,
  reelHeight: number,
  copyIdx: number
): number {
  return -((yShift % reelHeight) + reelHeight * copyIdx);
}
