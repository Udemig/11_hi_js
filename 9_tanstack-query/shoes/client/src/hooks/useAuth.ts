// custom hook - kendi oluşturuğumuz hooklar
// useAuth: auth işlev / verilerine erişmeye yarayacak hook

import { useMutation } from "@tanstack/react-query";
import { LoginData, RegisterData } from "../types";
import { authApi } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: (data: LoginData) => authApi.login(data),
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/");
    },
  });

  const register = useMutation({
    mutationFn: (data: RegisterData) => authApi.register(data),
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/");
    },
  });

  const logout = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: (res) => {
      localStorage.removeItem("accessToken");
      navigate("/login");
    },
  });

  return {
    login, //
    register,
    logout,
    isAuthenticated: !!localStorage.getItem("accessToken"),
  };
}
