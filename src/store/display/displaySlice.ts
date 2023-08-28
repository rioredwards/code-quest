import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the state
export type DisplayState = {
  isOn: boolean;
  text: string;
};

// Define the initial state using that type
const initialState: DisplayState = {
  isOn: false,
  text: "",
};

export const displaySlice = createSlice({
  name: "display",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startDisplay: (state, action: PayloadAction<string>) => {
      state.isOn = true;
      state.text = action.payload;
    },
    stopDisplay: (state) => {
      state.isOn = false;
      state.text = "";
    },
  },
});

export const { startDisplay, stopDisplay } = displaySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDisplay = (state: RootState) => state.reels;

export default displaySlice.reducer;
