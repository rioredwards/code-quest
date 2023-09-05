import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export enum TutorialStep {
  PULLING_LEVER,
  STOPPING_REELS,
  WAITING_FOR_CHALLENGE,
  COPYING_CHALLENGE,
  DRAGGING_REEL,
  LOCKING_REEL,
  SPIN_AGAIN,
}

export type TutorialTargetEl =
  | "REEL"
  | "LOCK_SWITCH"
  | "SPIN_BTN"
  | "LEVER"
  | "DISPLAY";

export type TutorialState = {
  tutIsActive: boolean;
  tutStep: TutorialStep;
};

const initialState: TutorialState = {
  tutIsActive: false,
  tutStep: TutorialStep.PULLING_LEVER,
};

export const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    startTutorial: (state) => {
      state.tutIsActive = true;
      state.tutStep = TutorialStep.PULLING_LEVER;
    },
    targetElActivated: (state) => {
      if (!state.tutIsActive) return;

      if (state.tutStep === TutorialStep.SPIN_AGAIN) {
        state.tutStep = TutorialStep.PULLING_LEVER;
        state.tutIsActive = false;
      } else {
        state.tutStep += 1;
      }
    },
    stopTutorial: (state) => {
      state.tutIsActive = false;
    },
  },
});

export const { startTutorial, stopTutorial, targetElActivated } =
  tutorialSlice.actions;

export const selectTutorialState = (state: RootState) => state.tutorial;
export const selectTutorialTargetEl = (
  state: RootState
): TutorialTargetEl | null => {
  const { tutStep, tutIsActive } = state.tutorial;

  if (!tutIsActive) return null;

  switch (tutStep) {
    case TutorialStep.PULLING_LEVER:
      return "LEVER";
    case TutorialStep.STOPPING_REELS:
      return "SPIN_BTN";
    case TutorialStep.WAITING_FOR_CHALLENGE:
      return "DISPLAY";
    case TutorialStep.COPYING_CHALLENGE:
      return "DISPLAY";
    case TutorialStep.DRAGGING_REEL:
      return "REEL";
    case TutorialStep.LOCKING_REEL:
      return "LOCK_SWITCH";
    case TutorialStep.SPIN_AGAIN:
      return "SPIN_BTN";
  }
};

export default tutorialSlice.reducer;
