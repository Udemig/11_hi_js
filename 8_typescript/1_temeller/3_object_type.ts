/*
 * Object Type
 * Normal şartlarda ts'de bir objext type'ı mevcut.
 * Ama Object type'ı ucu çok açık bir type olduğu için kullanılmasını tercih etmeyiz
 * Biz genelde spesifik bir şekilde özellikleri ve özelliklerinin tipi belirli olan nesnelerle çalışırız
 */

let data: object;

data = {};

data = [];

data = function () {};

data = new Date();

// nesne tipi tanımlamnın doğru yolu
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
  age: number;
  premium?: boolean;
};

// tanımladığımız tipe göre değer ataması yapma
student = {
  id: 4,
  firstname: "Ali",
  lastname: "Yılmaz",
  isGraduated: true,
  age: 45,
};

// örneğin api'dan gelen bir data var
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// değer tanımı
user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: 92998,
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
