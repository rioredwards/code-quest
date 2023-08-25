import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ReelName, ReelState, SpinState } from "../../types";

// Define a type for the state
export type ReelsState = [ReelState, ReelState, ReelState, ReelState];

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
  },
  {
    name: "TECH",
    spinState: "PRE",
    chosenIdx: null,
  },
  {
    name: "TASK",
    spinState: "PRE",
    chosenIdx: null,
  },
  {
    name: "TIME",
    spinState: "PRE",
    chosenIdx: null,
  },
];

export const reelsSlice = createSlice({
  name: "reels",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
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
