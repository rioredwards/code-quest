import { configureStore } from '@reduxjs/toolkit';
import reelsReducer from './reels/reelsSlice';
import displayReducer from './display/displaySlice';
import cursorReducer from './cursor/cursorSlice';
import helpReducer from './help/helpSlice';

export const store = configureStore({
  reducer: {
    reels: reelsReducer,
    display: displayReducer,
    cursor: cursorReducer,
    help: helpReducer,
  },
});

console.log('hello world');

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
