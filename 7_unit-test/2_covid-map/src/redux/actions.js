import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";
import millify from "millify";

export const getDetails = createAsyncThunk(
  "/covid/getDetails",
  async (country) => {
    // ülke ismini api'ın istediği formata getir
    const formattedCountry = country.replaceAll(" ", "-");

    // api'lara atılacak istekleri oluştur
    const req1 = api.get("/statistics", {
      params: { country: formattedCountry },
    });

    const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

    // api isteklerini paralel bir şekilde gönder
    const responses = await Promise.all([req1, req2]);

    //  veriyi formatla
    let data = responses[0].data.response[0];

    data = {
      continent: data.continent,
      country: data.country,
      capital: responses[1].data[0].capital,
      currency: Object.entries(responses[1].data[0].currencies)[0][1].name,
      day: new Date(data.day).toLocaleDateString("tr"),
      cases: millify(data.cases.total),
      deaths: millify(data.deaths.total),
      tests: millify(data.tests.total),
      population: millify(data.population),
      flags: responses[1].data[0].flags,
    };

    // aksiyonun payload'ını belirle
    return data;
  }
);

/*
    İstediğim payload:

    {
     continent: "Asia",
     country: "Turkey",
     day:"2025-01-07",
     cases: 8984097,
     deaths: 103543
     population:324934
     tests:34893245,
     flags:{}
    }

*/
