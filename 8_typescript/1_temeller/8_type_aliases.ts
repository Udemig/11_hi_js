/*
 * Type Aliases | Custom Type
 * Şuana kadar tip ataması yaparken js'de var olan temel tipler ve ekstra olarak 1-2 ts tipini kullandık.
  
 * Gerçek proejelerde o anki yaptığımız işe özel spesifik bir veri tipine ihtiyaç duyabiliyoruz.

 * Bunları tanımlamak için type anahtar kelimesi kullanırız.

 * Neden ihtiyacımız var?
 * Çünkü belirlediğimiz bir type'u proje içerisinde birden çok alanda/sayfada kullanmamız gerekebilir. Bu noktada type aliases kullanıp kendi tipimizi oluşturursak kod tekrarının önüne geçeriz
*/

// Örnek - 1
// Kendi özel tipimizi oluşturalım
type metin = string;

// Kendi özel tipimizi kullanalum
let isim: metin = "zeki";

// Örnek - 2
// Sorun: aynı union type'ı birden çok kullandığımız bir seneryo olsun
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 56;
let baz: string | number | boolean = true;

// Çözüm: custom type kullanarak kod tekrarını önleyebiliriz
type SNBType = string | number | boolean;

const foo1: SNBType = "merhaba";
const bar1: SNBType = 56;
const baz1: SNBType = true;

// Örnek - 3
// aynı tipi birden fazla kullanmamaız gerken  bir seneryo olsun
let user: { name: string; age: number; mail: string } = {
  name: "Ali",
  age: 45,
  mail: "ali@gmail.com",
};

const createUser = (newUser: { name: string; age: number; mail: string }) => {};

const users: { name: string; age: number; mail: string }[] = [user, user];

// yukarıdaki kod tekrarını kendi özel tipimizi oluşturarak çözebilir
type UserType = { name: string; age: number; mail: string };

let user2: UserType = {
  name: "Ali",
  age: 45,
  mail: "ali@gmail.com",
};

const createUser2 = (newUser: UserType) => {};

const users2: UserType[] = [user, user];

// Örnek - 4
// uçuş proejsinde sıkça kullandığımız enlem ve boylam değerlerini içeren dizinin tipini tanımlayalım
type GeoType = [number, number];

let xCoords: GeoType = [45, 67];
let yCoords: GeoType = [46, 77];

const flightRoute: GeoType[] = [
  [45, 65],
  [45, 45],
  [46, 89],
];
