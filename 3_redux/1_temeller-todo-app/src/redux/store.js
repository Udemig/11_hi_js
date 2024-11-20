/*
 ! store
 * bütün reducer'ların tek bir merkde toplandığı state deposudur

 * 1) redux kütüphanesinden createStore methodu import edilir.
 * 2) store içerisinde tutulacak olan her bir veri için reducerlar oluşturulur.
 * 3) oluşturulan reducerlar `combineReducers` methodu ile birleştirilir 
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer varsa onları birleştirir
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
