import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the state
export type CursorSlice = {
  dragging: boolean;
};

// Define the initial state using that type
const initialState: CursorSlice = {
  dragging: false,
};

export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    dragging: (state) => {
      state.dragging = true;
    },
    stopDragging: (state) => {
      state.dragging = false;
    },
  },
});

export const { dragging, stopDragging } = cursorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCursor = (state: RootState) => state.reels;

export default cursorSlice.reducer;
