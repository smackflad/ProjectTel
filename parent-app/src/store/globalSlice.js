import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accountInitialized: false,
  userId: "",
  token: "",
};

// Then, handle actions in your reducers:
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.accountInitialized = action.payload.initialized;
      state.token = action.payload.access_token;
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.accountInitialized = false;
      state.userId = "";
      state.token = "";
    },
    accountInitialized(state, action) {
      if (action.payload === state.userId) state.accountInitialized = true;
    },
    initAccount(state, action) {
      console.log(action.payload);
      state.userId = action.payload;
      state.isLoggedIn = true;
      state.accountInitialized = false;
    },
  },
});

const { actions, reducer } = globalSlice;

export const { login, logout, accountInitialized, initAccount } = actions;

export default reducer;
