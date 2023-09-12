import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type DisplayState = {
  isOn: boolean;
  text: string | null;
  copied: boolean;
};

const initialState: DisplayState = {
  isOn: false,
  text: null,
  copied: false,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    startDisplay: (state, action: PayloadAction<string>) => {
      state.isOn = true;
      state.text = action.payload;
    },
    stopDisplay: (state) => {
      state.isOn = false;
      state.text = null;
    },
    copied: (state) => {
      state.copied = true;
    },
    copiedTimeout: (state) => {
      state.copied = false;
    },
  },
});

export const { startDisplay, stopDisplay, copied, copiedTimeout } = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.display;

export default displaySlice.reducer;
