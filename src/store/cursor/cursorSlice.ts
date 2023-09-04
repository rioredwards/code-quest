import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type CursorSlice = {
  dragging: boolean;
};

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

export const selectCursorDragState = (state: RootState) =>
  state.cursor.dragging;

export default cursorSlice.reducer;
