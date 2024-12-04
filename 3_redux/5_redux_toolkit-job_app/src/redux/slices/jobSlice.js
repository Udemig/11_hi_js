import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    setJobs: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = action.payload;
    },

    deleteJob: (state, action) => {
      const i = state.jobs.findIndex((i) => i.id == action.payload);

      state.jobs.splice(i, 1);
    },

    createJob: (state, action) => {
      state.jobs.push(action.payload);
    },
  },
});

export const { setLoading, setError, setJobs, deleteJob, createJob } =
  jobSlice.actions;

export default jobSlice.reducer;
