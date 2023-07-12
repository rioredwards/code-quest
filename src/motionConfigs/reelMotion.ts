import { MotionValue } from "framer-motion";

export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 5; // choices per second

export function translateYToReelCopyIdx(
  y: number,
  choicesLength: number,
  copyIdx: number
): number {
  const reelHeight = choicesLength * CHOICE_HEIGHT_VH;
  const translatedY = (y % reelHeight) - reelHeight * copyIdx;
  return translatedY;
}

export interface ReelMotionBaseParams {
  y: MotionValue<number>;
  animate: Function;
}
export interface ReelMotionConfig extends ReelMotionBaseParams {
  reelHeight: number;
  choicesLength: number;
}
export interface ChoiceMotionConfig extends ReelMotionBaseParams {
  choiceHeight: number;
}
export interface StoppingMotionConfig
  extends ReelMotionConfig,
    ChoiceMotionConfig {
  chosenIdx: number | null;
}

export interface AllReelMotionParams
  extends ReelMotionConfig,
    ChoiceMotionConfig,
    StoppingMotionConfig {}

const jumpMotion = { duration: 0 };

export async function preSpinAnimation(params: ReelMotionConfig) {
  const { y, reelHeight, animate } = params;
  const newY = translateYToReelCopyIdx(y.get(), reelHeight, 1);
  return await animate(y, newY, jumpMotion);
}

export async function idleAnimationStart(params: ReelMotionConfig) {
  const { y, reelHeight, animate, choicesLength } = params;
  const currYVal = y.get();
  const newY = shiftYByFullReel(currYVal, reelHeight, 1);
  const shiftDur = getIdleSpinStartDur(choicesLength);
  return await animate(y, [currYVal, newY], {
    duration: shiftDur,
    ease: "easeIn",
  });
}

export async function idleAnimation(params: ReelMotionConfig) {
  const { y, reelHeight, animate, choicesLength } = params;
  const currYVal = y.get();
  const translatedCurrYVal = translateYToReelCopyIdx(currYVal, reelHeight, 1);
  const newY = shiftYByFullReel(translatedCurrYVal, reelHeight, 1);
  const shiftDur = getIdleSpinLoopDur(choicesLength);
  return await animate(y, [translatedCurrYVal, newY], {
    duration: shiftDur,
    ease: "linear",
    repeat: Infinity,
  });
}

export async function stoppingAnimation(params: StoppingMotionConfig) {
  const { y, reelHeight, animate, chosenIdx, choiceHeight, choicesLength } =
    params;

  if (chosenIdx === null) {
    throw new Error("chosenIdx is undefined");
  }
  const currYVal = y.get();
  const translatedCurrYVal = translateYToReelCopyIdx(currYVal, reelHeight, 1);
  const choiceYInThirdReel = getYForChoice(
    chosenIdx,
    choiceHeight,
    choicesLength,
    2
  );
  return await animate([
    [y, translatedCurrYVal, jumpMotion],
    [
      y,
      [null, choiceYInThirdReel],
      {
        type: "spring",
        damping: 4,
        stiffness: 3.8,
        mass: 3.5,
        velocity: 80,
        restSpeed: 0.2,
      },
    ],
  ]);
}

export async function siftDownOneReel(params: ReelMotionConfig) {
  const { y, reelHeight, animate, choicesLength } = params;
  const currYVal = y.get();
  const newY = shiftYByFullReel(currYVal, reelHeight, 1);
  const shiftDur = getIdleSpinLoopDur(choicesLength);
  return await animate(y, [currYVal, newY], {
    duration: shiftDur,
    ease: "linear",
  });
}

export async function jumpUpOneReel(params: ReelMotionConfig) {
  const { y, reelHeight, animate } = params;
  const currYVal = y.get();
  const newY = shiftYByFullReel(currYVal, reelHeight, 1);
  return await animate(y, [currYVal, newY], jumpMotion);
}

export async function shiftByNumChoices(
  params: ChoiceMotionConfig & { numChoices: number }
) {
  const { choiceHeight, numChoices } = params;
  const currYVal = params.y.get();
  const newY = shiftYByChoice(currYVal, choiceHeight, numChoices);
  return [currYVal, newY, { duration: 0.1 }];
}

export async function shiftDownChoice(params: ChoiceMotionConfig) {
  const { y, choiceHeight } = params;
  const currYVal = y.get();
  const newY = shiftYByChoice(currYVal, choiceHeight, 1);
  return [currYVal, newY, { duration: 0.1 }];
}

export async function shiftUpChoice(params: ChoiceMotionConfig) {
  const { y, choiceHeight } = params;
  const currYVal = y.get();
  const newY = shiftYByChoice(currYVal, choiceHeight, -1);
  return [currYVal, newY, { duration: 0.1 }];
}

export function getIdleSpinLoopDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

export function getIdleSpinStartDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED + 1.2;
}

function shiftYByFullReel(
  y: number,
  reelHeight: number,
  numReels: number
): number {
  return y - reelHeight * numReels;
}

function shiftYByChoice(
  y: number,
  choiceHeight: number,
  numChoices: number
): number {
  return y - choiceHeight * numChoices;
}

function getYForChoice(
  chosenIdx: number,
  choiceHeight: number,
  choicesLength: number,
  copyIdx: number
): number {
  const yForChoiceInFirstReel = -(chosenIdx * choiceHeight);
  const yForChoiceInCopyIdxReel =
    yForChoiceInFirstReel - choiceHeight * copyIdx * choicesLength;
  const extraShiftForWindow =
    Math.floor(NUM_CHOICES_VISIBLE / 2) * choiceHeight;
  const centeredInWindow = yForChoiceInCopyIdxReel + extraShiftForWindow;
  return centeredInWindow;
}
