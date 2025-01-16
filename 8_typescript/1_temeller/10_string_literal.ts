/*
 * String Literal
 * Bir metnin tipini string olarak tanımlamak yerine alabilceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip kısıtlaması yapabiliyoruz.
  
 * Örn: Spotify benzeri bir projede kullanıcı nesnenesinin tipini tanımlamak istiyoruz.
 * Hesap türnünün tipini tanımlarken string yazmak yerine sadece alabileceği 3-4 farklı değeri ifade edersek daha kısıtlayıcı bir tip tanımı yapmış oluruz. 
*/

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium";
};

const newUser: User = {
  id: 365,
  name: "Faruk",
  account_type: "premium",
};

// Örnek:
// Bir araba kiralama sitesi için api'dan gelen araba verisini tipini tanımla
type Car = {
  make: string;
  model: string;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "BMW",
  model: "m4",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2017,
  owner: null,
};
