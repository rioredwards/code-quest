import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ChallengeState {
  type: string | null;
  tech: string | null;
  task: string | null;
  time: string | null;
}

// Define the initial state using that type
const initialState: ChallengeState = {
  type: null,
  tech: null,
  task: null,
  time: null,
};

export const challengeSlice = createSlice({
  name: "challenge",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    typeSet: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    typeReset: (state) => {
      state.type = null;
    },
    techSet: (state, action: PayloadAction<string>) => {
      state.tech = action.payload;
    },
    techReset: (state) => {
      state.tech = null;
    },
    taskSet: (state, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    taskReset: (state) => {
      state.task = null;
    },
    timeSet: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    timeReset: (state) => {
      state.time = null;
    },
  },
});

export const {
  typeSet,
  typeReset,
  techSet,
  techReset,
  taskSet,
  taskReset,
  timeSet,
  timeReset,
} = challengeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectChallenge = (state: RootState) => state.challenge;

export default challengeSlice.reducer;
