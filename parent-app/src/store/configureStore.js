import { configureStore } from "@reduxjs/toolkit";
import userAccountReducer from "../components/Pages/ParentProfilePage/Tabs/Account/Account.slice";

const store = configureStore({
  reducer: {
    userAccount: userAccountReducer,
  },
});

export default store;
