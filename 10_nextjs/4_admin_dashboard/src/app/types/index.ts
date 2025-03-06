import { StaticImageData } from "next/image";

export type InfoItem = {
  icon: StaticImageData;
  label: string;
  value: number | string;
};

export type Order = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
  rating: number;
  reviews_count: number;
  brand: string;
};
