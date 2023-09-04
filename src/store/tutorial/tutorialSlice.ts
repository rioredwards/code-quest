import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type TutorialState = {
  tutIsActive: boolean;
};

const initialState: TutorialState = {
  tutIsActive: false,
};

export const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    startTutorial: (state) => {
      state.tutIsActive = true;
    },
    stopTutorial: (state) => {
      state.tutIsActive = false;
    },
  },
});

export const { startTutorial, stopTutorial } = tutorialSlice.actions;

export const selectTutorialState = (state: RootState) => state.tutorial;
export const selectTutorialIsActiveState = (state: RootState) =>
  state.tutorial.tutIsActive;

export default tutorialSlice.reducer;
