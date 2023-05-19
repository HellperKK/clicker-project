import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";
import buildingsSlice from "./buildingSlice";
import achivementSlice from "./achivementSlice";

export const store = configureStore({
  reducer: {
    money: moneySlice,
    buildings: buildingsSlice,
    achievements: achivementSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
