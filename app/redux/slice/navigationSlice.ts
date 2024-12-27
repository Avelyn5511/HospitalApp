import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NavigationState = {
  isIntroDone: boolean;
  isLoggedIn: boolean;
  isShowLogin: boolean;
};

const initialState: NavigationState = {
  isIntroDone: false,
  isLoggedIn: false,
  isShowLogin: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setIsIntroDone: (state, { payload }: PayloadAction<boolean>) => {
      state.isIntroDone = payload;
    },
    setIsLoggedIn: (state, { payload }: PayloadAction<boolean>) => {
      console.log(state, payload);
      state.isLoggedIn = payload;
    },
    setIsShowLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isShowLogin = payload;
    },
  },
});

export default navigationSlice.reducer;
export const { setIsLoggedIn, setIsIntroDone, setIsShowLogin } =
  navigationSlice.actions;
