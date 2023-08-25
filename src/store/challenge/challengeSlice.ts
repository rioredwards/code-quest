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
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    resetType: (state) => {
      state.type = null;
    },
    setTech: (state, action: PayloadAction<string>) => {
      state.tech = action.payload;
    },
    resetTech: (state) => {
      state.tech = null;
    },
    setTask: (state, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    resetTask: (state) => {
      state.task = null;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    resetTime: (state) => {
      state.time = null;
    },
  },
});

export const {
  setType,
  resetType,
  setTech,
  resetTech,
  setTask,
  resetTask,
  setTime,
  resetTime,
} = challengeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectChallenge = (state: RootState) => state.challenge;

export default challengeSlice.reducer;
