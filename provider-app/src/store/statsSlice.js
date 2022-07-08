import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sD: "",
    eD: "",
    event: {
      name: "",
      id: "",
      checked: false,
    }
};

const statsSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateStats(state, action) {
        action.payload(state)
    },
  },
});

const { actions, reducer } = statsSlice;

export const { updateStats } = actions;

export default reducer;
