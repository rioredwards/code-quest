import { AnimationScope, MotionValue } from "framer-motion";
import { numToVh, vhToNum } from "../utils/genUtils";

/* Motion Constants */
export const CHOICE_HEIGHT_VH = 3.32; // vh
export const NUM_CHOICES_VISIBLE = 5;
export const BASE_SPIN_SPEED = 5; // choices per second

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
  damping: 4,
  stiffness: 3.8,
  mass: 3.5,
  velocity: 80,
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
export async function preSpinAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate } = params;
  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  logReelCopyIdxAtY(startYNum, choicesLength);
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
  const startMotion = getIdleStartMotion(spinDur);

  return animate([
    [reelEl, { y: startYVh }, jumpMotion],
    [reelEl, { y: endYVh }, startMotion],
    [reelEl, { y: startYVh }, jumpMotion],
  ]);
}

export async function idleLoopAnimation(params: ReelMotionParams) {
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

export async function stoppingAnimation(params: ReelMotionParams) {
  const { reelEl, yVh, choicesLength, animate, chosenIdx } = params;
  if (chosenIdx === null) throw new Error("chosenIdx is null");

  const currYNum = vhToNum(yVh.get());
  const startYNum = translateYToReelCopyIdx(currYNum, choicesLength, 1);
  const chosenIdxYInZeroReel = translateChoiceIdxToY(chosenIdx);
  const chosenIdxYInFirstReel = translateYToReelCopyIdx(
    chosenIdxYInZeroReel,
    choicesLength,
    1
  );
  const chosenIdxYInThirdReel = translateYToReelCopyIdx(
    chosenIdxYInFirstReel,
    choicesLength,
    3
  );
  const startYVh = numToVh(startYNum);
  const chosenIdxYInFirstReelVh = numToVh(chosenIdxYInFirstReel);
  const chosenIdxYInThirdReelVh = numToVh(chosenIdxYInThirdReel);

  return animate([
    [reelEl, { y: startYVh }, jumpMotion],
    [reelEl, { y: chosenIdxYInThirdReelVh }, stoppingMotion],
    [reelEl, { y: chosenIdxYInFirstReelVh }, jumpMotion],
  ]);
}

export async function postSpinAnimation(params: ReelMotionParams) {
  const { reelEl, choicesLength, animate, chosenIdx } = params;
  if (chosenIdx === null) throw new Error("chosenIdx is null");

  const chosenIdxYInZeroReel = translateChoiceIdxToY(chosenIdx);
  const chosenIdxYInFirstReel = translateYToReelCopyIdx(
    chosenIdxYInZeroReel,
    choicesLength,
    1
  );
  const chosenIdxYInFirstReelVh = numToVh(chosenIdxYInFirstReel);

  return animate(reelEl, { y: chosenIdxYInFirstReelVh }, jumpMotion);
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
    Math.floor(roundedY / CHOICE_HEIGHT_VH)
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
