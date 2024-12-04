import { createSlice } from "@reduxjs/toolkit";
import { initialTasks } from "../../ constants";
import { v4 } from "uuid";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      // gelen nesneye id ekle
      action.payload.id = v4();

      // task dizisine yeni nesneyi ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // silinecek elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload);

      // splice ile islme
      state.tasks.splice(i, 1);
    },

    updateTask: (state, action) => {
      // güncellenicek elemanın sırasını bul
      const i = state.tasks.findIndex(
        (i) => i.id === action.payload.id
      );

      // splice ile güncelleme
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
