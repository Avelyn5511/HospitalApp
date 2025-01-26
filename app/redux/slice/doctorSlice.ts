import { Doctor } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DoctorState = {
  doctors: Doctor[] | null;
};

const initialState: DoctorState = {
  doctors: null,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setDoctors: (state, { payload }: PayloadAction<Doctor[]>) => {
      state.doctors = payload;
    },
  },
});

export default doctorSlice.reducer;
export const { setDoctors } = doctorSlice.actions;
