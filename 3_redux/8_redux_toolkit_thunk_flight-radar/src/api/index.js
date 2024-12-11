import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "b782ffa092msh3d1773dc6125311p172512jsn961131e9b38c",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
