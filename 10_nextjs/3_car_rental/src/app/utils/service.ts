import { Car, Order } from "../types";

const API_URL = process.env.API_URL;

type GetCarsReturn = {
  cars: Car[];
};

export const getCars = async (): Promise<GetCarsReturn> => {
  const res = await fetch(`${API_URL}/api/cars`);

  return res.json();
};

type GetCarReturn = {
  car: Car;
};

export const getCar = async (id: string): Promise<GetCarReturn> => {
  const res = await fetch(`${API_URL}/api/cars/${id}`);

  return res.json();
};

type GetPaymentUrlReturn = {
  url: string;
};

export const getPaymentUrl = async (car: Car): Promise<GetPaymentUrlReturn> => {
  const res = await fetch(`http://localhost:3000/api/checkout`, {
    method: "POST",
    body: JSON.stringify(car),
  });

  return res.json();
};

type GetOrdersReturn = {
  orders: Order[];
};

export const getOrders = async (): Promise<GetOrdersReturn> => {
  const res = await fetch(`http://localhost:3000/api/orders`);

  return res.json();
};
