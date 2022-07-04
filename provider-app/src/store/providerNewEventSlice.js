import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ageCategory: [],
  eventCategory: [],
  title: "",
  description: "",
  price: "",
  ammount: "",
  eventDate: [],
  // images: [],
  location: {
    address: "",
    addressNum: "",
    city: "",
    state: "",
    country: "",
    postalCode: ""
  },  
};

const providerNewEventSlice = createSlice({
  name: "newEvent",
  initialState,
  reducers: {
    ageUpdate(state, action) {
        state.ageCategory = action.payload;
    },
    catUpdate(state, action) {
        state.eventCategory = action.payload;
    },
    fromUpdate(state, action) {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.ammount = action.payload.ammount;
      state.eventDate = action.payload.eventDate;
      // state.images = action.payload.images;
    },
    locationUpdate(state, action) {
      state.location.address = action.payload.address;
      state.location.addressNum = action.payload.addressNum;
      state.location.city = action.payload.city;
      state.location.state = action.payload.state;
      state.location.country = action.payload.country;
      state.location.postalCode = action.payload.postalCode;
    },
    dateUpdate(state, action) {
      state.eventDate = action.payload.eventDate;
    },
  },
});

const { actions, reducer } = providerNewEventSlice;

export const { ageUpdate, catUpdate, fromUpdate, locationUpdate, dateUpdate } = actions;

export default reducer;
