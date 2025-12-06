// store/contactDetailsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ContactState = {
  mobile: string;
  email: string;
};

const initialState: ContactState = {
  mobile: "",
  email: "",
};

const contactDetailsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: keyof ContactState; value: string }>) => {
      state[action.payload.field] = action.payload.value;
    },
    resetContact: () => initialState,
  },
});

export const { setField, resetContact } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;
