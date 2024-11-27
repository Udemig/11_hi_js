/*
 * Hem reducer'ı hem aksiyonları hem de aksiyon tiplerini tek noktada oluşturmamızı sağlar.

 * nasıl slice oluşturulur ?
 * import createSlice 
 * name: slice ismi > string
 * initialState: başlangıç state'i > object 
 * reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder
 */

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: { count: 1 },
  // hem aksiyonları hemde görevlerini tanımla
  reducers: {
    increase: (state, action) => {},
    decrease: (state, action) => {},
  },
});

console.log(slice);

console.log("1", slice.actions.increase());

export default slice;
