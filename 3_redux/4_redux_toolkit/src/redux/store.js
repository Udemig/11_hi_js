import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir
 * thunk otomatik olarak kurulu gelir
 * devtools (geliştirici araçları) eklentisi kurulu gelir
 */

const store = configureStore({
  reducer: {
    counterReducer,
    crudReducer,
  },
});

export default store;
