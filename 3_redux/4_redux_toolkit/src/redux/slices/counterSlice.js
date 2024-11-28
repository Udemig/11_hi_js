/*
 * Hem reducer'ı hem aksiyonları hem de aksiyon tiplerini tek noktada oluşturmamızı sağlar.

 * nasıl slice oluşturulur ?
 * import createSlice 
 * name: slice ismi > string
 * initialState: başlangıç state'i > object 
 * reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, name: "furkan" },
  // hem aksiyonları hemde görevlerini tanımla
  reducers: {
    increase: (state) => {
      // artık state'i doğrudan güncelleyebiliriz
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// slice'ın oluşturduğu aksiyonlar
export const { increase, decrease, setCount } = counterSlice.actions;

// slice'ın oluşturudğu reducer fonksiyonu
export default counterSlice.reducer;
