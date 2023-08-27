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
  TECH = 1,
  TASK = 2,
  TIME = 3,
}

interface SpinStateUpdated {
  name: ReelName;
  spinState: SpinState;
}

interface ChosenIdxSet {
  name: ReelName;
  chosenIdx: number | null;
}

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
    name: "TECH",
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
        }
        reel.isSpinLocked = true;
      });
    },
    lockSwitchToggled: (state, action: PayloadAction<ReelName>) => {
      const reelIdx = state.findIndex((reel) => reel.name === action.payload);
      const reel = state[reelIdx];
      reel.isUserLocked = !reel.isUserLocked;
      if (reel.spinState === "PRE") {
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
      const reel = state[reelIdx];
      if (reel.spinState === "IDLE_LOOP") {
        reel.chosenIdx = getRandIdx(allChoices[reel.name].length);
        reel.spinState = "STOPPING";
      }
    },
    spinStateUpdated: (state, action: PayloadAction<SpinStateUpdated>) => {
      const { name, spinState } = action.payload;
      const idx = state.findIndex((reel) => reel.name === name);
      state[idx].spinState = spinState;
    },
    chosenIdxSet: (state, action: PayloadAction<ChosenIdxSet>) => {
      const { name, chosenIdx } = action.payload;
      const idx = state.findIndex((reel) => reel.name === name);
      state[idx].chosenIdx = chosenIdx;
    },
    allSpinStatesUpdated: (state, action: PayloadAction<SpinState>) => {
      state.forEach((reel) => {
        reel.spinState = action.payload;
      });
    },
    allChosenIdxsReset: (state) => {
      state.forEach((reel) => {
        reel.chosenIdx = null;
      });
    },
  },
});

export const {
  spinStateUpdated,
  chosenIdxSet,
  allSpinStatesUpdated,
  allChosenIdxsReset,
} = reelsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectReels = (state: RootState) => state.reels;

export default reelsSlice.reducer;
