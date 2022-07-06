import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import searchReducer from "./searchSlice";
import globalReducer from "./globalSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  global: globalReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {persistedReducer, search: searchReducer, [api.reducerPath]: api.reducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export default store;
