import { User } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
