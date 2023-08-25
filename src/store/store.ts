import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import challengeReducer from "./challenge/challengeSlice";
import reelsReducer from "./reels/reelsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    challenge: challengeReducer,
    reels: reelsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
