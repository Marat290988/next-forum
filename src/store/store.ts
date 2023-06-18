import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.slice";

const rootReducer = combineReducers({
  user: userSlice.reducer
});

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer
  }
});

export type TypeRootState = ReturnType<typeof store.getState>;
