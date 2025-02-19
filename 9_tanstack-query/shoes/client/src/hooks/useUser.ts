import { useQuery } from "@tanstack/react-query";
import { authApi } from "../services/api";

export default function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => authApi.getCurrentUser(),
    retry: false,
    select: (res) => res.data.user,
    enabled: !!localStorage.getItem("accessToken"),
  });

  return {
    user: data,
    isLoading,
    error,
    isAuthenticated: !!localStorage.getItem("accessToken"),
  };
}
