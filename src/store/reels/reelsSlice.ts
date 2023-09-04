import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ReelName, SpinState } from "../../types";
import { getRandIdx } from "../../utils/genUtils";
import { allChoices } from "../../data/allChoices";

// Define a type for the state
export type ReelState = {
  name: ReelName;
  spinState: SpinState;
  chosenIdx: number | null;
  isUserLocked: boolean;
  isSpinLocked: boolean;
};

export type ReelsState = [ReelState, ReelState, ReelState, ReelState];

export enum ReelIdx {
  TYPE = 0,
  TASK = 1,
  TECH = 2,
  TIME = 3,
}

type lockSwitchToggledPayload = {
  name: ReelName;
  choiceIdxAtCurrYPos: number;
};

// Define the initial state using that type
const initialState: ReelsState = [
  {
    name: "TYPE",
    spinState: "PRE",
    chosenIdx: null,
    isUserLocked: false,
    isSpinLocked: false,
  },
  {
    name: "TASK",
    spinState: "PRE",
    chosenIdx: null,
    isUserLocked: false,
    isSpinLocked: false,
  },
  {
    name: "TECH",
    spinState: "PRE",
    chosenIdx: null,
    isUserLocked: false,
    isSpinLocked: false,
  },
  {
    name: "TIME",
    spinState: "PRE",
    chosenIdx: null,
    isUserLocked: false,
    isSpinLocked: false,
  },
];

export const reelsSlice = createSlice({
  name: "reels",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    leverPulled: (state) => {
      const reels = state;
      // If there is a spin in progress, do nothing
      if (
        reels.every(
          ({ spinState }) => spinState !== "PRE" && spinState !== "POST"
        )
      ) {
        return;
      }
      reels.forEach((reel) => {
        if (reel.spinState === "PRE") {
          reel.spinState = "IDLE_START";
          reel.chosenIdx = null;
        }
        reel.isSpinLocked = true;
      });
    },
    lockSwitchToggled: (
      state,
      action: PayloadAction<lockSwitchToggledPayload>
    ) => {
      const reelIdx = state.findIndex(
        (reel) => reel.name === action.payload.name
      );
      const reel = state[reelIdx];

      reel.isUserLocked = !reel.isUserLocked;

      if (reel.spinState === "PRE") {
        reel.chosenIdx = action.payload.choiceIdxAtCurrYPos;
        reel.spinState = "POST";
      } else if (reel.spinState === "POST" && !reel.isSpinLocked) {
        reel.spinState = "PRE";
      }
    },
    finishedIdleStart: (state, action: PayloadAction<ReelName>) => {
      const reelIdx = state.findIndex((reel) => reel.name === action.payload);
      const reel = state[reelIdx];

      reel.spinState = "IDLE_LOOP";
    },
    finishedStopping: (state, action: PayloadAction<ReelName>) => {
      const reelIdx = state.findIndex((reel) => reel.name === action.payload);
      const reel = state[reelIdx];

      reel.spinState = "POST";
    },
    spinLightClicked: (state, action: PayloadAction<ReelName>) => {
      const reelIdx = state.findIndex((reel) => reel.name === action.payload);
      const targetReel = state[reelIdx];

      const currSpinState = targetReel.spinState;
      if (currSpinState !== "IDLE_START" && currSpinState !== "IDLE_LOOP")
        return;

      // compatibilityScores is a Map where the
      // keys are all the available choices for the reel
      // and the values are the number of times that choice shows up
      // in the other reels' choices' compatibleWith arrays
      const compatibilityScores = new Map<number, number>();

      // Each choice starts with a score of 0
      for (let i = 0; i < allChoices[targetReel.name].length; i++) {
        compatibilityScores.set(i, 0);
      }

      // Iterate through all the reels and calculate the compatibility scores
      state.forEach((reel) => {
        if (reel.chosenIdx === null) return;

        const choiceCompatibleWith =
          allChoices[reel.name][reel.chosenIdx].compatibleWith[targetReel.name];

        // If undefined, the choice is compatible with any of the choices in the target reel
        if (choiceCompatibleWith === undefined) return;

        choiceCompatibleWith.forEach((choiceIdx) => {
          compatibilityScores.set(
            choiceIdx,
            compatibilityScores.get(choiceIdx)! + 1
          );
        });
      });

      // Find the choice or choices with the highest compatibility score
      const maxCompatibilityScore = Math.max(
        ...Array.from(compatibilityScores.values())
      );
      const maxCompatibilityChoiceIdxs = Array.from(
        compatibilityScores.entries()
      )
        .filter(([_, score]) => score === maxCompatibilityScore)
        .map(([idx]) => idx);

      // Select a random choice from the choices with the highest compatibility score
      const randIdx = getRandIdx(maxCompatibilityChoiceIdxs.length);
      const chosenIdx = maxCompatibilityChoiceIdxs[randIdx];

      targetReel.chosenIdx = chosenIdx;
      targetReel.spinState = "STOPPING";
    },
    finishedPrintingChallenge: (state) => {
      state.forEach((reel) => {
        reel.isSpinLocked = false;
        if (!reel.isUserLocked) {
          reel.spinState = "PRE";
        }
      });
    },
  },
});

export const {
  leverPulled,
  lockSwitchToggled,
  finishedIdleStart,
  finishedStopping,
  spinLightClicked,
  finishedPrintingChallenge,
} = reelsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectReels = (state: RootState) => state.reels;

export default reelsSlice.reducer;
