import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type HelpItemName = 'LEVER' | 'STOP_BUTTON' | 'REEL' | 'LOCK_SWITCH' | 'DISPLAY';

type HelpItem = {
  displayName: string;
  description: string;
};

const helpItems: Record<HelpItemName, HelpItem> = {
  LEVER: {
    displayName: 'LEVER',
    description: 'Pull to spin the reels!',
  },
  STOP_BUTTON: {
    displayName: 'STOP BUTTONS',
    description: 'Click when green to stop spinning reels.',
  },
  REEL: {
    displayName: 'REELS',
    description: 'Drag to manually select an option, then lock it in place with the lock-switch.',
  },
  LOCK_SWITCH: {
    displayName: 'LOCK SWITCHES',
    description: 'Lock a reel in place to keep it from spinning when the lever is pulled.',
  },
  DISPLAY: {
    displayName: 'DISPLAY',
    description: 'View your completed challenge and copy it to your clipboard.',
  },
};

export type MenuType = 'HOW_TO' | 'ABOUT';

export type HelpState = {
  helpMenuIsOpen: boolean;
  activeMenu: MenuType;
  helpItemHover: HelpItemName | null;
};

const initialState: HelpState = {
  helpMenuIsOpen: false,
  activeMenu: 'HOW_TO',
  helpItemHover: null,
};

export const helpSlice = createSlice({
  name: 'help',
  initialState,
  reducers: {
    helpBtnClicked: (state) => {
      state.helpMenuIsOpen = !state.helpMenuIsOpen;
    },
    openHelpMenu: (state) => {
      state.helpMenuIsOpen = true;
    },
    closeHelpMenu: (state) => {
      state.helpMenuIsOpen = false;
    },
    setActiveMenu: (state, action: PayloadAction<MenuType>) => {
      state.activeMenu = action.payload;
    },
    startHoveringOverHelpTarget: (state, action: PayloadAction<HelpItemName>) => {
      state.helpItemHover = action.payload;
    },
    stopHoveringOverHelpTarget: (state) => {
      state.helpItemHover = null;
    },
  },
});

export const {
  helpBtnClicked,
  openHelpMenu,
  closeHelpMenu,
  setActiveMenu,
  startHoveringOverHelpTarget,
  stopHoveringOverHelpTarget,
} = helpSlice.actions;

export const selectHelpState = (state: RootState) => state.help;
export const selectHelpStateMenu = (state: RootState) => state.help.helpMenuIsOpen;
export const selectHelpTargetEl = (state: RootState): HelpItemName | null => {
  const { helpItemHover, helpMenuIsOpen } = state.help;
  return helpMenuIsOpen ? helpItemHover : null;
};
export const getHelpItemFromName = (helpItemName: HelpItemName) => helpItems[helpItemName];

export default helpSlice.reducer;
