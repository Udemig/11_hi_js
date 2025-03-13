import { Order, Product, User } from "../types";

const baseUrl = "http://localhost:4040";

type GetOrdersReturn = Promise<Order[]>;
type GetProductsReturn = Promise<Product[]>;
type GetProductReturn = Promise<Product>;
type GetUsersReturn = Promise<User[]>;
type GetUserReturn = Promise<User>;

// Siparişleri getir
export const getOrders = async (): GetOrdersReturn => {
  const res = await fetch(`${baseUrl}/orders`);

  return res.json();
};

// Ürünleri getir
export const getProducts = async (): GetProductsReturn => {
  const res = await fetch(`${baseUrl}/products`);

  return res.json();
};

// Belirli bir ürünü getir
export const getProduct = async (id: string): GetProductReturn => {
  const res = await fetch(`${baseUrl}/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }

  return res.json();
};

// Yeni bir ürün oluştur
export const createProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const res = await fetch(`${baseUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Failed to create proxduct");
  }

  return res.json();
};

// Belirli bir ürünü güncelle
export const updateProduct = async (
  id: string,
  product: Partial<Product>
): Promise<Product> => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error(`Failed to update product with ID: ${id}`);
  }

  return res.json();
};

// Belirli bir ürünü sil
export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete product with ID: ${id}`);
  }

  return;
};

// Kullanıcıları getir
export const getUsers = async (): GetUsersReturn => {
  const res = await fetch(`${baseUrl}/users`);

  return res.json();
};

// Kullanıcıyı sil
export const deleteUser = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/users/${id}`, {
    method: "DELETE",
  });
};

// Belirli bir kullanıcıyı getir
export const getUser = async (id: string): GetUserReturn => {
  const res = await fetch(`${baseUrl}/users/${id}`);

  return res.json();
};

// Toplam değerleri getir
export const getValues = async () => {
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();

  return {
    total_users: users.length,
    total_products: products.length,
    total_orders: orders.length,
    total_price: orders.reduce((acc, order) => acc + order.total_price, 0),
  };
};
