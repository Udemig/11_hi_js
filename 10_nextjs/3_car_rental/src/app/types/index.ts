export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  color: string;
  mileage: number;
  fuelType: "Gas" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  drive: "fwd" | "rwd" | "awd" | "4wd";
  type: string;
  description: string;
  capacity: number;
  gasoline: number;
}

export interface Order {
  _id: string;
  product: Car;
  money_spend: number;
  currency: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
