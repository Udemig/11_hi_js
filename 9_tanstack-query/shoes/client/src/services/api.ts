import axios from "axios";
import { AuthResponse, LoginData, RegisterData, Shoe, User } from "../types";

// axios özelleştirme
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// her api isteği öncesibde local'de token varsa header olarak ekle
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//! todo: loginde yanlış şifre girince sonsuz döngüye düşüyor
// api'dan gelen her cevabı izle
api.interceptors.response.use(
  // cevap olumluysa hiç bir şey yapmaz
  (res) => res,
  // cevap olumsuzsa bu fonksiyon çalışır
  async (err) => {
    const originalRequest = err.config;

    // hata seebebi token kaynaklıysa bu if çalışır
    if (err?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // refresh endpointine istek atılır ve access token yenilenir
        const res = await api.post<AuthResponse>("/auth/refresh");
        const { accessToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        // orjinal api isteği tekrardan atılır
        return api(originalRequest);
      } catch (error) {
        // access token yenilenmeze demekki refresh tokenın süresi dolmuştur o zaman sistemdan atarız
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

// auth endpoints
export const authApi = {
  register: (data: RegisterData) => api.post<AuthResponse>("/auth/register", data),

  login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),

  logout: () => api.post("/auth/logout"),

  getCurrentUser: () => api.get<{ user: User }>("/auth/me"),
};

// shoe endpoints
export const shoesApi = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
};
