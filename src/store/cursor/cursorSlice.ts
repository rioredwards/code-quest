import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type HoverTarget =
  | "REEL"
  | "LOCK_SWITCH"
  | "SPIN_BTN"
  | "LEVER"
  | "DISPLAY";

export type CursorSlice = {
  dragging: boolean;
  hoverTarget: HoverTarget | null;
};

const initialState: CursorSlice = {
  dragging: false,
  hoverTarget: null,
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
    onHoverTarget: (state, action: PayloadAction<HoverTarget>) => {
      state.hoverTarget = action.payload;
    },
    offHoverTarget: (state) => {
      state.hoverTarget = null;
    },
  },
});

export const { dragging, stopDragging, onHoverTarget } = cursorSlice.actions;

export const selectCursorDragState = (state: RootState) =>
  state.cursor.dragging;
export const selectCursorHoverTarget = (state: RootState) =>
  state.cursor.hoverTarget;

export default cursorSlice.reducer;
