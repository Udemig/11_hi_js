import axios from "axios";
import { Place } from "../types";

interface GetResponse {
  message: string;
  places: Place[];
  results: number;
}

interface Params {
  location?: string;
  title?: string;
  order?: string;
}

export const getPlaces = async (params?: Params): Promise<Place[]> => {
  const res = await axios.get<GetResponse>("http://localhost:4001/api/places", { params });

  return res.data.places;
};
