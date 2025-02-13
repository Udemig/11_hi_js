import axios from "axios";
import { Place, PlaceData } from "../types";

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

interface PostResponse {
  message: string;
  place: Place;
}

export const createPlace = async (body: PlaceData): Promise<Place> => {
  const res = await axios.post<PostResponse>("http://localhost:4001/api/places", body);

  return res.data.place;
};

interface DetailResponse {
  message: string;
  place: Place;
}

export const getPlace = async (id: string): Promise<Place> => {
  const res = await axios.get<DetailResponse>(`http://localhost:4001/api/place/${id}`);

  return res.data.place;
};

export const deletePlace = async (id: string): Promise<void> => {
  await axios.delete(`http://localhost:4001/api/place/${id}`);
};
