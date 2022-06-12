import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
const fetchUserAccount = createAsyncThunk(
  "userAccount/fetchUserAccount",
  async (userId, thunkAPI) => {
    const { currentRequestId, loading } = thunkAPI.getState().userAccount;
    if (loading !== "pending" || thunkAPI.requestId !== currentRequestId) {
      return;
    }
    const response = await axios.get("vale apilink");
    await new Promise((r) => setTimeout(r, 3000));
    return response.data;
  }
);

const initialState = {
  profile: {},
  loading: "idle",
  error: "",
};
// Then, handle actions in your reducers:
const userAccountSlice = createSlice({
  name: "userAccount",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUserAccount.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchUserAccount.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.profile = action.payload;
        }
      })
      .addCase(fetchUserAccount.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

const { actions, reducer } = userAccountSlice;

export { fetchUserAccount };

export default reducer;
