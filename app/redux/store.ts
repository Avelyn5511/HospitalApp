import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slice/navigationSlice";
import userReducer from "./slice/userSlice";
import doctorReducer from "./slice/doctorSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
    doctor: doctorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
