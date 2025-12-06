// store/personalDetailsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PersonalDetailsState = {
  title: string;
  firstName: string;
  surname: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
};

const initialState: PersonalDetailsState = {
  title: "",
  firstName: "",
  surname: "",
  dobDay: "",
  dobMonth: "",
  dobYear: "",
};

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ field: keyof PersonalDetailsState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetPersonalDetails: () => initialState,
  },
});

export const { setField, resetPersonalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
