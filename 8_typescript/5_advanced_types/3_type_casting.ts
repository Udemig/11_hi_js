/*
 * Type Casting - Tür Dönüşümü
 
 * Bir değişkenin tipinin tanımlasının ardından kullanıldığı yere özel olarak farklı bir tipte algılanmasını istiyorsak bu yöntemi kullanırız.
*/

type Product = {
  name: string;
  price: string | number;
};

let product1: Product = {
  name: "Laptop",
  price: 55000,
};

let product2: Product = {
  name: "Phone",
  price: "880000",
};

// product1'in fiyatı üzerinden bir işlem yapmaya çalışırsak değeri number olsa bile tipi string | number olduğundan hata vericek. Bizde değişkenin kullandıldığı kod satırına özel olarak typescripte'e bu değişkenin tipini number olarak algılanması gerektiğini söyledik.
let indirimliFiyat = (product1.price as number) - 1000;

// Örnek - 2
let kisi: unknown = {
  name: "john",
  age: 56,
  adress: "123 main st.",
};

// kişi nesnenin tipi unknown olduğundan name değerine erişemiyorum
// kisi.name; // !HATA

// nensne tipi oluştur
interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// kişi nensenin tipini IPerson'a tür dönüşümü ile değiştirip name değerine erişelim
(kisi as IPerson).name;
