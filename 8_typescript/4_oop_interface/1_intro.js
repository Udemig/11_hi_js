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
var kisi1 = {
    name: "Ahmet",
    age: 23,
};
var kisi2 = {
    name: "Ahmet",
    age: 23,
};
// Yukarıdaki interface ile bir nesne tipi tanımlayalım
var square = {
    width: 200,
    height: 200,
    corner: 4,
    calculateArea: function () {
        return this.width * this.height;
    },
};
// Interface ile farklı bir nesne tipi tanımlayalım
var circle = {
    width: 40,
    height: 1,
    radius: 20,
    calculateArea: function () {
        return Math.PI * this.radius * this.radius;
    },
};
console.log(circle.calculateArea());
console.log(square.calculateArea());
