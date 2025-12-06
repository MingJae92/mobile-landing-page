// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import personalDetailsReducer from "./personalDetailsSlice";
import contactDetailsReducer from "./contactDetailsSlice";
// import other slices like addressReducer if needed

export const store = configureStore({
  reducer: {
    form: formReducer,
    personalDetails: personalDetailsReducer,
    contactDetails: contactDetailsReducer,
    // address: addressReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
