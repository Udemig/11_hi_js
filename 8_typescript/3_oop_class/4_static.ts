//* Static kelimesi özelliğin veya methodun sınıfın örneğini almadan kullanmamızı sağlar.

//* Static Method
class Matematik {
  x: number = 10;

  topla(y: number): void {
    console.log(this.x + y);
  }

  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olmayan topla methoduna erişelim
const math = new Matematik();
math.topla(19);

// static olan carp methoduna erişme
Matematik.carp(14, 6);

//* Static Property
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    this.isim = isim;
    Ogrenci.ogrenciSayisi++;
  }
}

const o1 = new Ogrenci("Ali");
const o2 = new Ogrenci("Ahmet");
const o3 = new Ogrenci("Fatma");

console.log(o1, o2, o3);
console.log("toplam öğrenci " + Ogrenci.ogrenciSayisi);
