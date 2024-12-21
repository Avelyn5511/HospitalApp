import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
