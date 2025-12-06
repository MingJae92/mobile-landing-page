import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Address type
export interface Address {
    line1: string;
    line2: string;
    city: string;
    county: string;
}

// Full form state type
export interface FormState {
    postcode: string;
    address: Address;
    addressFieldsVisible: boolean;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    mobile: string;
    email: string;
    signature: string; // optional: store base64 of signature
}

// Initial state
const initialState: FormState = {
    postcode: "",
    address: { line1: "", line2: "", city: "", county: "" },
    addressFieldsVisible: false,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    mobile: "",
    email: "",
    signature: "",
};

// Slice
const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        // Step 1: Address
        setPostcode(state, action: PayloadAction<string>) {
            state.postcode = action.payload;
        },
        setAddress(state, action: PayloadAction<Partial<Address>>) {
            state.address = { ...state.address, ...action.payload };
        },
        showAddressFields(state) {
            state.addressFieldsVisible = true;
        },

        // Step 2: Personal Details
        setFirstName(state, action: PayloadAction<string>) {
            state.firstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string>) {
            state.lastName = action.payload;
        },
        setDateOfBirth(state, action: PayloadAction<string>) {
            state.dateOfBirth = action.payload;
        },

        // Step 3: Contact Details
        setMobile(state, action: PayloadAction<string>) {
            state.mobile = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },

        // Step 4: Signature
        setSignature(state, action: PayloadAction<string>) {
            state.signature = action.payload;
        },

        // Reset entire form
        resetForm() {
            return initialState;
        },
    },
});

// Export actions
export const {
    setPostcode,
    setAddress,
    showAddressFields,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setMobile,
    setEmail,
    setSignature,
    resetForm,
} = formSlice.actions;

// Export reducer
export default formSlice.reducer;
