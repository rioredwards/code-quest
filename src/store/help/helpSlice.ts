import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type HelpItem =
  | "LEVER"
  | "SPIN_BTN"
  | "REEL"
  | "LOCK_SWITCH"
  | "DISPLAY";

export type HelpState = {
  helpMenuIsOpen: boolean;
  helpItemHover: HelpItem | null;
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
    helpItemHovered: (state, action: PayloadAction<HelpItem>) => {
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
export const selectHelpTargetEl = (state: RootState): HelpItem | null => {
  const { helpItemHover, helpMenuIsOpen } = state.help;
  return helpMenuIsOpen ? helpItemHover : null;
};

export default helpSlice.reducer;
