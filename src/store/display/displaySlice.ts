import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const INITIAL_TEXT = "Pull the lever!";
const REELS_SPINNING_TEXT = "Click the green button to stop the reels!";

// Define a type for the state
export type DisplayState = {
  mode: "challenge" | "info" | "off";
  text: string;
  userHovering: boolean;
  copied: boolean;
};

// Define the initial state using that type
const initialState: DisplayState = {
  mode: "info",
  text: INITIAL_TEXT,
  userHovering: false,
  copied: false,
};

export const displaySlice = createSlice({
  name: "display",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    leverPulled: (state) => {
      state.mode = "info";
      state.text = REELS_SPINNING_TEXT;
    },
    reelsFinishedStopping: (state, action: PayloadAction<string>) => {
      state.mode = "challenge";
      state.text = action.payload;
    },
    updatedChallenge: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    userHovering: (state) => {
      state.userHovering = true;
    },
    userNotHovering: (state) => {
      state.userHovering = false;
    },
    copied: (state) => {
      state.copied = true;
    },
    copiedTimeout: (state) => {
      state.copied = false;
    },
  },
});

export const {
  leverPulled,
  reelsFinishedStopping,
  updatedChallenge,
  userHovering,
  userNotHovering,
  copied,
  copiedTimeout,
} = displaySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDisplay = (state: RootState) => state.reels;

export default displaySlice.reducer;
