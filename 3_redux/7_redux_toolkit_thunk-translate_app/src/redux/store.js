import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";

export default configureStore({
  reducer: { languageReducer },
});
