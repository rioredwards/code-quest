import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { HoverTarget } from "../cursor/cursorSlice";

const INITIAL_TEXT = "Pull the lever!";
const REELS_SPINNING_TEXT = "Click the green buttons to stop the reels!";
const REELS_STOPPING_TEXT = "Your challenge is being generated...";

export type Modes = "challenge" | "info" | "off";
export type DisplayState = {
  mode: Modes;
  text: string;
  copied: boolean;
};

const initialState: DisplayState = {
  mode: "info",
  text: INITIAL_TEXT,
  copied: false,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    showTooltip: (state, action: PayloadAction<HoverTarget>) => {
      state.mode = "info";
      state.text = action.payload || "";
    },
    reelsStopping: (state) => {
      state.mode = "info";
      state.text = REELS_STOPPING_TEXT;
    },
    challengeCreated: (state, action: PayloadAction<string>) => {
      state.mode = "challenge";
      state.text = action.payload;
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
  showTooltip,
  reelsStopping,
  challengeCreated,
  copied,
  copiedTimeout,
} = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.display;

export default displaySlice.reducer;
