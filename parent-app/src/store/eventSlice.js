import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventID: "",
  eventLocation: "",
  eventDate: "",
  eventPrice: ""
};

// Then, handle actions in your reducers:
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent(state, action) {
      // state = action.payload
      console.log(state)
      action.payload(state);
    },
  },
});

const { actions, reducer } = eventSlice;

export const { setEvent } = actions;

export default reducer;
