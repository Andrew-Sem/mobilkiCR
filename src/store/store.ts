import { configureStore } from "@reduxjs/toolkit";
import GamesReducer from "./reducers/gamesSlice";
import AuthReducer from "./reducers/authSlice";
import CartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    games: GamesReducer,
    auth: AuthReducer,
    cart: CartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
