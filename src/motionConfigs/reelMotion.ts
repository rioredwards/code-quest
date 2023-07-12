import { AnimationScope, MotionValue } from "framer-motion";
import { numToVh, vhToNum } from "../utils/genUtils";

/* Motion Constants */
export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 5; // choices per second

/* Motion Specifications */
const jumpMotion = { duration: 0 };

/* Types */
export interface ReelMotionParams {
  reelEl: AnimationScope<HTMLElement>;
  yVh: MotionValue<string>;
  animate: Function;
  choicesLength: number;
  chosenIdx: number | null;
}

/* Animation Functions */
export async function preSpinAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const startYVh = numToVh(startYNum);
  return animate(reelEl, { y: startYVh }, jumpMotion);
}

export async function idleStartAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const startYVh = numToVh(startYNum);
  const endYNum = translateYToReelCopyIdx(currYNum, choicesLength, 2);
  const endYVh = numToVh(endYNum);
  const spinDur = getIdleSpinStartDur(choicesLength);

  return animate([
    [reelEl, { y: startYVh }, jumpMotion],
    [reelEl, { y: endYVh }, { duration: spinDur, ease: "easeIn" }],
    [reelEl, { y: startYVh }, jumpMotion],
  ]);
}

/* Animation Helper Functions */
export function translateYToReelCopyIdx(
  y: number,
  choicesLength: number,
  copyIdx: number
): number {
  const reelHeight = choicesLength * CHOICE_HEIGHT_VH;
  const translatedY = (y % reelHeight) - reelHeight * copyIdx;
  return translatedY;
}

export function translateChosenIdxDownByReelCopy(
  chosenIdx: number,
  choicesLength: number,
  copyIdx: number
): number {
  return chosenIdx + choicesLength * copyIdx;
}

export function roundYToNearestChoice(y: number): number {
  return Math.round(y / CHOICE_HEIGHT_VH) * CHOICE_HEIGHT_VH;
}

export function translateChoiceIdxToY(idx: number): number {
  const idxShiftedToMiddleOfWindow = idx - Math.floor(NUM_CHOICES_VISIBLE / 2);
  return -idxShiftedToMiddleOfWindow * CHOICE_HEIGHT_VH;
}

export function yIsOutsideDragBounds(
  y: number,
  choicesLength: number
): boolean {
  const threshold = CHOICE_HEIGHT_VH * 0.5;
  const upperBound = translateChoiceIdxToY(0);
  const translatedUpper = translateYToReelCopyIdx(upperBound, choicesLength, 1);

  const lowerBound = translateChoiceIdxToY(choicesLength - 1);
  const translatedLower = translateYToReelCopyIdx(lowerBound, choicesLength, 1);

  const isOver = y > translatedUpper + threshold;
  const isUnder = y < translatedLower - threshold;

  return isOver || isUnder;
}

export function getIdleSpinLoopDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED;
}

export function getIdleSpinStartDur(choicesLength: number): number {
  return choicesLength / BASE_SPIN_SPEED + 1.2;
}

// export async function preSpinAnimation(params: ReelMotionParams) {
//   const { y, reelHeight, animate } = params;
//   const newY = translateYToReelCopyIdx(y.get(), reelHeight, 1);
//   return await animate(y, newY, jumpMotion);
// }

// export async function idleAnimationStart(params: ReelMotionParams) {
//   const { y, reelHeight, animate, choicesLength } = params;
//   const currYVal = y.get();
//   const newY = shiftYByFullReel(currYVal, reelHeight, 1);
//   const shiftDur = getIdleSpinStartDur(choicesLength);
//   return await animate(y, [currYVal, newY], {
//     duration: shiftDur,
//     ease: "easeIn",
//   });
// }

// export async function idleAnimation(params: ReelMotionParams) {
//   const { y, reelHeight, animate, choicesLength } = params;
//   const currYVal = y.get();
//   const translatedCurrYVal = translateYToReelCopyIdx(currYVal, reelHeight, 1);
//   const newY = shiftYByFullReel(translatedCurrYVal, reelHeight, 1);
//   const shiftDur = getIdleSpinLoopDur(choicesLength);
//   return await animate(y, [translatedCurrYVal, newY], {
//     duration: shiftDur,
//     ease: "linear",
//     repeat: Infinity,
//   });
// }

// export async function stoppingAnimation(params: StoppingMotionConfig) {
//   const { y, reelHeight, animate, chosenIdx, choiceHeight, choicesLength } =
//     params;

//   if (chosenIdx === null) {
//     throw new Error("chosenIdx is undefined");
//   }
//   const currYVal = y.get();
//   const translatedCurrYVal = translateYToReelCopyIdx(currYVal, reelHeight, 1);
//   const choiceYInThirdReel = getYForChoice(
//     chosenIdx,
//     choiceHeight,
//     choicesLength,
//     2
//   );
//   return await animate([
//     [y, translatedCurrYVal, jumpMotion],
//     [
//       y,
//       [null, choiceYInThirdReel],
//       {
//         type: "spring",
//         damping: 4,
//         stiffness: 3.8,
//         mass: 3.5,
//         velocity: 80,
//         restSpeed: 0.2,
//       },
//     ],
//   ]);
// }

// export async function siftDownOneReel(params: ReelMotionParams) {
//   const { y, reelHeight, animate, choicesLength } = params;
//   const currYVal = y.get();
//   const newY = shiftYByFullReel(currYVal, reelHeight, 1);
//   const shiftDur = getIdleSpinLoopDur(choicesLength);
//   return await animate(y, [currYVal, newY], {
//     duration: shiftDur,
//     ease: "linear",
//   });
// }

// export async function jumpUpOneReel(params: ReelMotionParams) {
//   const { y, reelHeight, animate } = params;
//   const currYVal = y.get();
//   const newY = shiftYByFullReel(currYVal, reelHeight, 1);
//   return await animate(y, [currYVal, newY], jumpMotion);
// }

// export async function shiftByNumChoices(
//   params: ChoiceMotionConfig & { numChoices: number }
// ) {
//   const { choiceHeight, numChoices } = params;
//   const currYVal = params.y.get();
//   const newY = shiftYByChoice(currYVal, choiceHeight, numChoices);
//   return [currYVal, newY, { duration: 0.1 }];
// }

// export async function shiftDownChoice(params: ChoiceMotionConfig) {
//   const { y, choiceHeight } = params;
//   const currYVal = y.get();
//   const newY = shiftYByChoice(currYVal, choiceHeight, 1);
//   return [currYVal, newY, { duration: 0.1 }];
// }

// export async function shiftUpChoice(params: ChoiceMotionConfig) {
//   const { y, choiceHeight } = params;
//   const currYVal = y.get();
//   const newY = shiftYByChoice(currYVal, choiceHeight, -1);
//   return [currYVal, newY, { duration: 0.1 }];
// }

// function shiftYByFullReel(
//   y: number,
//   reelHeight: number,
//   numReels: number
// ): number {
//   return y - reelHeight * numReels;
// }

// function shiftYByChoice(
//   y: number,
//   choiceHeight: number,
//   numChoices: number
// ): number {
//   return y - choiceHeight * numChoices;
// }

// function getYForChoice(
//   chosenIdx: number,
//   choiceHeight: number,
//   choicesLength: number,
//   copyIdx: number
// ): number {
//   const yForChoiceInFirstReel = -(chosenIdx * choiceHeight);
//   const yForChoiceInCopyIdxReel =
//     yForChoiceInFirstReel - choiceHeight * copyIdx * choicesLength;
//   const extraShiftForWindow =
//     Math.floor(NUM_CHOICES_VISIBLE / 2) * choiceHeight;
//   const centeredInWindow = yForChoiceInCopyIdxReel + extraShiftForWindow;
//   return centeredInWindow;
// }
