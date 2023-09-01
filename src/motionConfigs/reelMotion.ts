import {
  AnimationPlaybackControls,
  AnimationScope,
  MotionValue,
} from "framer-motion";
import { numToVh, vhToNum } from "../utils/genUtils";

/* Motion Constants */
export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 5; // choices per second
const MIN_DISTANCE_TO_STOP = CHOICE_HEIGHT_VH * 20;

/* Motion Specifications */
const jumpMotion = { duration: 0 };
function getIdleStartMotion(spinDur: number) {
  return { duration: spinDur, ease: "easeIn" };
}
function getIdleLoopMotion(spinDur: number) {
  return { duration: spinDur, ease: "linear", repeat: Infinity };
}
const stoppingMotion = {
  type: "spring",
  damping: 2.9, // Strength of opposing force. Set to 10 by default.
  mass: 4.5, // Mass of the moving object. Higher values will result in more lethargic movement. Set to 1 by default.
  stiffness: 2.8, // Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
  velocity: 55, // The initial velocity of the spring. By default this is the current velocity of the component.
  restSpeed: 1.5,
};

/* Types */
export interface ReelMotionParams {
  reelEl: AnimationScope<HTMLElement>;
  yVh: MotionValue<string>;
  animate: Function;
  choicesLength: number;
  chosenIdx: number | null;
}

export async function logReelCopyIdxAtY(yNum: number, choicesLength: number) {
  const currYNumRounded = roundYToNearestChoice(yNum);
  const yShiftToMiddleOfWindow =
    CHOICE_HEIGHT_VH * Math.floor(NUM_CHOICES_VISIBLE / 2);
  const translatedToMiddle = currYNumRounded - yShiftToMiddleOfWindow;
  const reelHeight = choicesLength * CHOICE_HEIGHT_VH;
  const reelCopyIdx = Math.floor(Math.abs(translatedToMiddle / reelHeight));
  console.log("reelCopyIdx", reelCopyIdx);
}

/* Animation Functions */
export function preSpinAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const startYVh = numToVh(startYNum);
  return animate(reelEl, { y: startYVh }, jumpMotion);
}

export function idleStartAnimation(
  params: ReelMotionParams
): AnimationPlaybackControls {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const startYVh = numToVh(startYNum);
  const endYNum = translateYToReelCopyIdx(currYNum, choicesLength, 2);
  const endYVh = numToVh(endYNum);
  const spinDur = getIdleSpinStartDur(choicesLength);
  const startMotion = getIdleStartMotion(spinDur);

  return animate([
    [reelEl, { y: startYVh }, jumpMotion],
    [reelEl, { y: endYVh }, startMotion],
    [reelEl, { y: startYVh }, jumpMotion],
  ]);
}

export function idleLoopAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const startYVh = numToVh(startYNum);
  const endYNum = translateYToReelCopyIdx(currYNum, choicesLength, 2);
  const endYVh = numToVh(endYNum);
  const spinDur = getIdleSpinLoopDur(choicesLength);
  const loopMotion = getIdleLoopMotion(spinDur);

  return animate(reelEl, { y: [startYVh, endYVh] }, loopMotion);
}

export function stoppingAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate, chosenIdx } = params;
  if (chosenIdx === null) throw new Error("chosenIdx is null");

  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const chosenIdxYInReelZero = translateChoiceIdxToY(chosenIdx);
  const chosenIdxYInReelOne = translateYToReelCopyIdx(
    chosenIdxYInReelZero,
    choicesLength,
    1
  );

  let chosenReelY = chosenIdxYInReelOne;

  const distanceToChosenIdxInReelOne =
    Math.abs(chosenIdxYInReelOne) - Math.abs(startYNum);

  if (distanceToChosenIdxInReelOne < MIN_DISTANCE_TO_STOP) {
    chosenReelY = translateYToReelCopyIdx(
      chosenIdxYInReelZero,
      choicesLength,
      2
    );
    const distanceToChosenIdxInReelTwo =
      Math.abs(chosenReelY) - Math.abs(startYNum);
    if (distanceToChosenIdxInReelTwo < MIN_DISTANCE_TO_STOP) {
      chosenReelY = translateYToReelCopyIdx(
        chosenIdxYInReelZero,
        choicesLength,
        3
      );
    }
  }

  const startYVh = numToVh(startYNum);
  const chosenIdxYInReelOneVh = numToVh(chosenIdxYInReelOne);
  const chosenIdxYInChosenReelVh = numToVh(chosenReelY);

  return animate([
    [reelEl, { y: startYVh }, jumpMotion],
    [reelEl, { y: chosenIdxYInChosenReelVh }, stoppingMotion],
    [reelEl, { y: chosenIdxYInReelOneVh }, jumpMotion],
  ]);
}

export function postSpinAnimation(params: ReelMotionParams) {
  const { reelEl, choicesLength, animate, chosenIdx } = params;
  if (chosenIdx === null) throw new Error("chosenIdx is null");

  const chosenIdxYInReelZero = translateChoiceIdxToY(chosenIdx);
  const chosenIdxYInReelOne = translateYToReelCopyIdx(
    chosenIdxYInReelZero,
    choicesLength,
    1
  );
  const chosenIdxYInReelOneVh = numToVh(chosenIdxYInReelOne);

  return animate(reelEl, { y: chosenIdxYInReelOneVh }, jumpMotion);
}

/* Animation Helper Functions */
export function translateYToReelCopyIdx(
  y: number,
  choicesLength: number,
  copyIdx: number
): number {
  const reelHeight = choicesLength * CHOICE_HEIGHT_VH;
  const yShiftToMiddleOfWindow =
    CHOICE_HEIGHT_VH * Math.floor(NUM_CHOICES_VISIBLE / 2);
  const yAtMiddleOfWindow = y - yShiftToMiddleOfWindow;
  const translatedY = (yAtMiddleOfWindow % reelHeight) - reelHeight * copyIdx;
  return translatedY + yShiftToMiddleOfWindow;
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

export function yToChoiceIdx(y: number, choicesLength: number): number {
  const roundedY = roundYToNearestChoice(y);
  const choiceIdxInFirstReel = Math.abs(
    Math.round(roundedY / CHOICE_HEIGHT_VH)
  );
  const choiceIdxShiftedToMiddleOfWindow =
    choiceIdxInFirstReel + Math.floor(NUM_CHOICES_VISIBLE / 2);
  const choiceIdx = choiceIdxShiftedToMiddleOfWindow % choicesLength;

  return choiceIdx;
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
