import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    },
    // name: "",
    // taxId: "",
    // taxOffice: "",
    // email: "",
    // phone: "",
    // iban: "",
    // location: "",
    // address: "",
    // addressNum: "",
    // city: "",
    // state: "",
    // country: "",
    // postalCode: "",
};

const providerRegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStep1(state, action) {
        state.admin.email = action.payload.email;
        state.admin.password = action.payload.password;
    },
    registerStep2(state, action) {
        state.admin.firstName = action.payload.firstName;
        state.admin.lastName = action.payload.lastName;
    },
    // registerStep3(state, action) {
    //     state.name = action.payload.name;
    //     state.taxId = action.payload.taxId;
    //     state.taxOffice = action.payload.taxOffice;
    //     state.email = action.payload.email;
    //     state.phone = action.payload.phone;
    //     state.iban = action.payload.iban;
    //     state.location = action.payload.location;
    //     state.address = action.payload.address;
    //     state.addressNum = action.payload.addressNum;
    //     state.city = action.payload.city;
    //     state.state = action.payload.state;
    //     state.country = action.payload.country;
    //     state.postalCode = action.payload.postalCode;
    // },
  },
});

const { actions, reducer } = providerRegisterSlice;

export const { registerStep1, registerStep2, registerStep3 } = actions;

export default reducer;
