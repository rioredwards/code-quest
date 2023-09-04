import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const INITIAL_TEXT = "Pull the lever!";
const REELS_SPINNING_TEXT = "Click the green buttons to stop the reels!";
const REELS_STOPPING_TEXT = "Your challenge is being generated...";

export type Modes = "challenge" | "info" | "off";
export type DisplayState = {
  mode: Modes;
  text: string;
  userHovering: boolean;
  copied: boolean;
};

const initialState: DisplayState = {
  mode: "info",
  text: INITIAL_TEXT,
  userHovering: false,
  copied: false,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    reelsSpinning: (state) => {
      state.mode = "info";
      state.text = REELS_SPINNING_TEXT;
    },
    reelsStopping: (state) => {
      state.mode = "info";
      state.text = REELS_STOPPING_TEXT;
    },
    challengeCreated: (state, action: PayloadAction<string>) => {
      state.mode = "challenge";
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
  reelsSpinning,
  reelsStopping,
  challengeCreated,
  userHovering,
  userNotHovering,
  copied,
  copiedTimeout,
} = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.reels;

export default displaySlice.reducer;
