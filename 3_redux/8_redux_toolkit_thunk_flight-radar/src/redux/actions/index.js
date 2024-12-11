import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {
  // parametreleri belirle
  const params = {
    bl_lat: "34.569972",
    bl_lng: "25.548568",
    tr_lat: "43.501715",
    tr_lng: "45.287815",
    speed: "1,99999",
  };

  // api isteğini at
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen veri dizi içerisinde dizi olduğundan projede kullanımı daha kolay olsun diye dizinin içindeki dizileri nesneye çevir
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  // slice'a aktarılacak payload'ı belirle
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };

  const res = await api.get("flights/detail", { params });

  return res.data;
});
