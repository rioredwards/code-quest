import { configureStore } from "@reduxjs/toolkit";
import reelsReducer from "./reels/reelsSlice";
import displayReducer from "./display/displaySlice";
import cursorReducer from "./cursor/cursorSlice";
import tutorialReducer from "./tutorial/tutorialSlice";

export const store = configureStore({
  reducer: {
    reels: reelsReducer,
    display: displayReducer,
    cursor: cursorReducer,
    tutorial: tutorialReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
