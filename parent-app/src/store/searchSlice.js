import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ageCategories: [],
  eventCategories: [],
  searchTxt: "",
  startDate: "",
  endDate: "",
  location: "",
};

// Then, handle actions in your reducers:
const searchSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    update(state, action) {
      action.payload(state);
    },
  },
});

const { actions, reducer } = searchSlice;

export const { update } = actions;

export default reducer;
