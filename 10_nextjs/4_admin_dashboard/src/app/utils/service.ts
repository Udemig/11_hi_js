import { Order, Product } from "../types";

const baseUrl = "http://localhost:4040";

type GetOrdersReturn = Promise<Order[]>;
type GetProductsReturn = Promise<Product[]>;
type GetProductReturn = Promise<Product>;

export const getOrders = async (): GetOrdersReturn => {
  const res = await fetch(`${baseUrl}/orders`);

  return res.json();
};

export const getProducts = async (): GetProductsReturn => {
  const res = await fetch(`${baseUrl}/products`);
  
  return res.json();
};

export const getProduct = async (id: string): GetProductReturn => {
  const res = await fetch(`${baseUrl}/products/${id}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }
  
  return res.json();
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const res = await fetch(`${baseUrl}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  
  if (!res.ok) {
    throw new Error('Failed to create product');
  }
  
  return res.json();
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  
  if (!res.ok) {
    throw new Error(`Failed to update product with ID: ${id}`);
  }
  
  return res.json();
};

export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to delete product with ID: ${id}`);
  }
  
  return;
};
