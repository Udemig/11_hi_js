import { StaticImageData } from "next/image";

export type InfoItem = {
  icon: StaticImageData;
  label: string;
  value: number | string;
};

export type Order = {
  order_id: number;
  user_id: number;
  order_date: string;
  status: string;
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: [
    {
      product_id: number;
      name: string;
      quantity: number;
      price: number;
    }
  ];
  id: string;
};

export type Product = {
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

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  phone: string;
  orders: [
    {
      order_id: number;
      product_id: number;
      quantity: number;
      total_price: number;
      order_date: string;
    },
    {
      order_id: number;
      product_id: number;
      quantity: number;
      total_price: number;
      order_date: string;
    }
  ];
};
