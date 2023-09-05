import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type HelpItemName =
  | "LEVER"
  | "SPIN_BTN"
  | "REEL"
  | "LOCK_SWITCH"
  | "DISPLAY";

type HelpItem = {
  displayName: string;
  description: string;
};

const helpItems: Record<HelpItemName, HelpItem> = {
  LEVER: {
    displayName: "Lever",
    description: "Pull the lever to spin the reels.",
  },
  SPIN_BTN: {
    displayName: "Stop Button",
    description: "Click the spin button to spin the reels.",
  },
  REEL: {
    displayName: "Reels",
    description: "The reels will spin and stop randomly.",
  },
  LOCK_SWITCH: {
    displayName: "Lock Switch",
    description: "Lock the reels to keep them from spinning.",
  },
  DISPLAY: {
    displayName: "Display",
    description: "The display shows the current state of the game.",
  },
};

export type HelpState = {
  helpMenuIsOpen: boolean;
  helpItemHover: HelpItemName | null;
};

const initialState: HelpState = {
  helpMenuIsOpen: false,
  helpItemHover: null,
};

export const helpSlice = createSlice({
  name: "help",
  initialState,
  reducers: {
    helpBtnClicked: (state) => {
      state.helpMenuIsOpen = !state.helpMenuIsOpen;
    },
    closeHelpMenu: (state) => {
      state.helpMenuIsOpen = false;
    },
    helpItemHovered: (state, action: PayloadAction<HelpItemName>) => {
      if (!state.helpMenuIsOpen) return;

      state.helpItemHover = action.payload;
    },
  },
});

export const { helpBtnClicked, closeHelpMenu, helpItemHovered } =
  helpSlice.actions;

export const selectHelpState = (state: RootState) => state.help;
export const selectHelpStateMenu = (state: RootState) =>
  state.help.helpMenuIsOpen;
export const selectHelpTargetEl = (state: RootState): HelpItemName | null => {
  const { helpItemHover, helpMenuIsOpen } = state.help;
  return helpMenuIsOpen ? helpItemHover : null;
};

export default helpSlice.reducer;
