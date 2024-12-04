import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    // api isteği at
    const res = await api.get("/getLanguages");

    // fulfilled aksiyonu'nun payload'ını belirle
    return res.data.data.languages;
  }
);
