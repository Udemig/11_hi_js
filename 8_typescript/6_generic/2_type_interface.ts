/*
 * Fonksiyonlarda olduğu gibi generic yapısının yeniden kullanıbilir olması için type ve interface'lerdede kullabiliyoruz.
 */

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T | undefined;
};

const arr1: ArrayType<number> = {
  items: [1, 2, 3, 4, 5],

  addItem(item) {
    this.items.push(item);
  },

  getItem(index) {
    return this.items[index];
  },
};

// Interface'ler ile Generic Kullanalım
type ArrayType1<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T | undefined;
};

interface IPerson<T, R> {
  name: T;
  age: R;
  id?: number;
  father?: string;
  mother?: string;
}

const foo: IPerson<string, number> = {
  name: "Ahmet",
  age: 56,
};

const bar: IPerson<object, string> = {
  name: { isim: "Mahmut", soyisim: "Kaya" },
  age: "elli",
};

// T, R, Z, V, E, A, S, D
