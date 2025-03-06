import { Order } from "../types";

const baseUrl = "http://localhost:4040";

type GetOrdersReturn = Promise<Order[]>;

export const getOrders = async (): GetOrdersReturn => {
  const res = await fetch(`${baseUrl}/orders`);

  return res.json();
};
