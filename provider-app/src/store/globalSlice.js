import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    access_token: "",
    role: "",
    companyId: "",
    isLoggedIn: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    login(state, action) {
        state.userId = action.payload.id;
        state.access_token = action.payload.access_token;
        state.role = action.payload.role;
        state.companyId = action.payload.companyId;
        state.isLoggedIn = true;
    },
    logout(state, action) {
        state.id = "";
        state.access_token = "";
        state.role = "";
        state.companyId = "";
        state.isLoggedIn = false;
    },
  },
});

const { actions, reducer } = globalSlice;

export const { login, logout } = actions;

export default reducer;
