import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import globalReducer from "./globalSlice";
import providerRegisterReducer from "./providerRegisterSlice";
const reducers = combineReducers({
    global: globalReducer,
    register: providerRegisterReducer,
  });

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: {persistedReducer, [api.reducerPath]: api.reducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  });
  
  export default store;