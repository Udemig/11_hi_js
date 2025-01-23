/*
 ! Interface
 * Bir nesnenin yapısını yani nesnenin hangi tipte özellik ve metodlara sahip olucağını ifade eder.

 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görev yapmaktadır.
 * 3'ünün ortak noktası bir nesnenin tipini tanımlamak için kullanabilir olmaları
  
 ? Abstract Class vs Interface
 * Abstract class'lar aynı anda sadece bir class'ı miras alabilir
 * Interface'ler tek seferde birden fazla interface'i miras alabilir
  
 ? Type vs Interface
 * Type ile birlikte sadece nesne değil dizi,tupple,function tipide tanımlanabilir.
 * Interface ile sadece nesne tipi tanımlabilir.
 * Nesne tipi tanımlama açısından type'ı veya interface'i öne çıkaran özellik yoktur. 
*/

// Type Aliases yöntemi ile nesne tipi tanımlama
type PersonType = {
  name: string;
  age: number;
};

const kisi1: PersonType = {
  name: "Ahmet",
  age: 23,
};

// Interface yöntemi ile nesne tipi tanımlama
interface IPerson {
  name: string;
  age: number;
}

const kisi2: IPerson = {
  name: "Ahmet",
  age: 23,
};

// Type Aliases yönteminde interface'den farklı olarak nesne dışında tip tanımı yapılabilir
type alphanumeric = string | number;
type arrayType = string[];
type gasType = "electric" | "dizel" | "benzin";
type fnType = (a: number) => void;

// İleride oluşturucağımız bir geometrik şekil nesnesının özellik ve methodlarını tanımladığımız interface yazalım
interface IShape {
  width: number;
  height: number;
  corner?: number;
  radius?: number;
  calculateArea: () => number | string;
}

// Yukarıdaki interface ile bir nesne tipi tanımlayalım
const square: IShape = {
  width: 200,
  height: 200,
  corner: 4,
  calculateArea() {
    return this.width * this.height;
  },
};

// Interface ile farklı bir nesne tipi tanımlayalım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 20,
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.calculateArea());
console.log(square.calculateArea());
