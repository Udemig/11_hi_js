import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TagsState {
  tags: string[];
}

const initialState: TagsState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      if (state.tags.includes(action.payload)) return;
      state.tags.push(action.payload);
    },
  },
});

export default tagsSlice.reducer;
export const { addTag } = tagsSlice.actions;
