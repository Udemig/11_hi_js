/*
 * Intersection Types - Kesişim Türler
 * Typescript'de kesişim türler iki veya daha fazla türü birleştirmek için kullanılır
 */

type AType = { key1: string };
type BType = { key2: number };

// 1) Intersecrion: Her iki tipin özleilklerini birleştirir
type ABType = AType & BType;

let foo: ABType = { key1: "merhaba", key2: 45 };

// 2) Union: Belirlenen türlerin en az birinin bütün özelliklerinin tanımlanması yeterli olur
type AorBType = AType | BType;

let bar: AorBType = { key1: "merhaba" };
let baz: AorBType = { key2: 45 };
let ban: AorBType = { key1: "merhaba", key2: 45 };

// Intersection Types İçin Örnek
type BusinessPartner = {
  credit: number;
  name: string;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = Identity & BusinessPartner;
type NewEmployee = Identity & Contact & BusinessPartner;

let e1: NewEmployee = {
  id: 45,
  name: "Ayşe",
  email: "ayşe@gmail.com",
  phone: "3242345",
  credit: 8954353,
};

// Kullanıcı bilgilierini temsil eden tip
type UserType = {
  id: number;
  name: string;
};

// User type'ın verilerinin üzerine role ve permission tiplerini ekleyerek admin tipi oluşturduk
type AdminType = UserType & {
  role: string;
  permissions: string[];
};

const user: UserType = {
  id: 1,
  name: "Ahmet",
};

const adminUser: AdminType = {
  id: 2,
  name: "Ali",
  role: "admin",
  permissions: ["read", "write", "delete"],
};
