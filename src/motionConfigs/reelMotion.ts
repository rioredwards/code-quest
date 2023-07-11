import { MotionValue } from "framer-motion";

export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 5; // choices per second

export interface ReelMotionBaseParams {
  yShift: MotionValue<number>;
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
  const { yShift, reelHeight, animate } = params;
  const newYShift = translateYShiftToReelCopyIdx(yShift.get(), reelHeight, 1);
  return await animate(yShift, newYShift, jumpMotion);
}

export async function idleAnimationStart(params: ReelMotionConfig) {
  const { yShift, reelHeight, animate, choicesLength } = params;
  const currYShiftVal = yShift.get();
  const newYShift = shiftYByFullReel(currYShiftVal, reelHeight, 1);
  const shiftDur = getIdleSpinStartDur(choicesLength);
  return await animate(yShift, [currYShiftVal, newYShift], {
    duration: shiftDur,
    ease: "easeIn",
  });
}

export async function idleAnimation(params: ReelMotionConfig) {
  const { yShift, reelHeight, animate, choicesLength } = params;
  const currYShiftVal = yShift.get();
  const translatedCurrYShiftVal = translateYShiftToReelCopyIdx(
    currYShiftVal,
    reelHeight,
    1
  );
  const newYShift = shiftYByFullReel(translatedCurrYShiftVal, reelHeight, 1);
  const shiftDur = getIdleSpinLoopDur(choicesLength);
  return await animate(yShift, [translatedCurrYShiftVal, newYShift], {
    duration: shiftDur,
    ease: "linear",
    repeat: Infinity,
  });
}

export async function stoppingAnimation(params: StoppingMotionConfig) {
  const {
    yShift,
    reelHeight,
    animate,
    chosenIdx,
    choiceHeight,
    choicesLength,
  } = params;

  if (chosenIdx === null) {
    throw new Error("chosenIdx is undefined");
  }
  const currYShiftVal = yShift.get();
  const translatedCurrYShiftVal = translateYShiftToReelCopyIdx(
    currYShiftVal,
    reelHeight,
    1
  );
  const choiceYInThirdReel = getYForChoice(
    chosenIdx,
    choiceHeight,
    choicesLength,
    2
  );
  return await animate([
    [yShift, translatedCurrYShiftVal, jumpMotion],
    [
      yShift,
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
  const { yShift, reelHeight, animate, choicesLength } = params;
  const currYShiftVal = yShift.get();
  const newYShift = shiftYByFullReel(currYShiftVal, reelHeight, 1);
  const shiftDur = getIdleSpinLoopDur(choicesLength);
  return await animate(yShift, [currYShiftVal, newYShift], {
    duration: shiftDur,
    ease: "linear",
  });
}

export async function jumpUpOneReel(params: ReelMotionConfig) {
  const { yShift, reelHeight, animate } = params;
  const currYShiftVal = yShift.get();
  const newYShift = shiftYByFullReel(currYShiftVal, reelHeight, 1);
  return await animate(yShift, [currYShiftVal, newYShift], jumpMotion);
}

export async function shiftByNumChoices(
  params: ChoiceMotionConfig & { numChoices: number }
) {
  const { choiceHeight, numChoices } = params;
  const currYShiftVal = params.yShift.get();
  const newYShift = shiftYByChoice(currYShiftVal, choiceHeight, numChoices);
  return [currYShiftVal, newYShift, { duration: 0.1 }];
}

export async function shiftDownChoice(params: ChoiceMotionConfig) {
  const { yShift, choiceHeight } = params;
  const currYShiftVal = yShift.get();
  const newYShift = shiftYByChoice(currYShiftVal, choiceHeight, 1);
  return [currYShiftVal, newYShift, { duration: 0.1 }];
}

export async function shiftUpChoice(params: ChoiceMotionConfig) {
  const { yShift, choiceHeight } = params;
  const currYShiftVal = yShift.get();
  const newYShift = shiftYByChoice(currYShiftVal, choiceHeight, -1);
  return [currYShiftVal, newYShift, { duration: 0.1 }];
}

function getIdleSpinLoopDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

function getIdleSpinStartDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED + 1.4;
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
