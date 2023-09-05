import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type HelpItem =
  | "REEL"
  | "LOCK_SWITCH"
  | "SPIN_BTN"
  | "LEVER"
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
    openHelpMenu: (state) => {
      state.helpMenuIsOpen = true;
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

export const { openHelpMenu, closeHelpMenu, helpItemHovered } =
  helpSlice.actions;

export const selectHelpState = (state: RootState) => state.help;
export const selectHelpTargetEl = (state: RootState): HelpItem | null => {
  const { helpItemHover, helpMenuIsOpen } = state.help;
  return helpMenuIsOpen ? helpItemHover : null;
};

export default helpSlice.reducer;
