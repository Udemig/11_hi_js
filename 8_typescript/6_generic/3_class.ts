class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const strings = new Sorter<string>(["a", "b", "c", "d"]);
const numbers = new Sorter<number>([1, 7, 2, 4, 9, 6]);
console.log(numbers.sortData());

// Generic Özellik
// Tipi generic olarak tanımladığımızda her türlü tipte değer alabilmesinin önünü açıyoruz
// Bundan dolayı tanımlanan generic türünün alabilceği türleri kısıtlayabiliyoruz

class Container<T extends string | number | boolean> {
  private value: T;

  constructor(newValue: T) {
    this.value = newValue;
  }

  getValue(): T {
    return this.value;
  }
}

new Container<string>("Uzay");
new Container<number>(99);
new Container<boolean>(true);
// new Container<unknown>([{ id: 99 }]);
// new Container<never>([{ id: 99 }]);
// new Container<object>([{ id: 99 }]);

//* Challange
//* En az 1 generic tip alan type / interface / class / function yaz.
//* Tanımladığınız yapıyı en 1 kez kullanın
