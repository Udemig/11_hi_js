import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    clearRoute: (state) => {
      state.route = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetails.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.info = payload;
      state.route = payload.trail;
    });
  },
});

export default detailSlice.reducer;

export const { clearRoute } = detailSlice.actions;
