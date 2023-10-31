import { configureStore } from "@reduxjs/toolkit";
import usernameSlice from "./slices/username";

export const store = configureStore({
  reducer: {
    username: usernameSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
