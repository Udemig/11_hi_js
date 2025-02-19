import { useQuery } from "@tanstack/react-query";
import { shoesApi } from "../services/api";

export function useShoes() {
  const shoes = useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoesApi.getAll().then((res) => res.data),
  });

  const shoe = (id: string) =>
    useQuery({
      queryKey: ["shoe", id],
      queryFn: () => shoesApi.getById(id).then((res) => res.data),
    });

  return { shoes, shoe };
}
