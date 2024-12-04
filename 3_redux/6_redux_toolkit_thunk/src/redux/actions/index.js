// Asenkron Thunk Aksiyonu
// İçerisinde API isteği atabileceğimiz ve devamında gelen cevaba bağlı otomatik olarak reudcer'a haber vericek aksiyon

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk bizden iki argüman ister:
// 1) aksiyonun tipi
// 2) aksiyonun payload'ını döndüren fonksiyon
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  const res = await axios.get("https://dummyjson.com/users");

  return res.data.users;
});

/*
 createAsyncThunk aksiyonun çalışmasıyla birlikte:
 api isteği atıldığı anda "pending"
 api'dan olumsuz cevap gelirse "rejected"
 api'dan olumlu cevap gelirse "fulfilled"
 aksiyonları oto. olarak create async thunk tarafından dispach ediliyor
*/
