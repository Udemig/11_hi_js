/*
 * Inheritance (Kalıtım | Miras)

 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.

 * Miras herzaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında geçekleşir

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alabilir.
*/

// Parent Class
class GeometrikSekil {
  ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  uzunluk = 40;
  genilik = 40;
}

const d = new Dikdortgen("Dikdörgen");
d.tanim();

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  yaricap: number;

  constructor(ad: string, yaricap: number) {
    super(ad); // Parent class'ın constructor'ına değer gönder
    this.yaricap = yaricap;
  }
}

const x = new Daire("Daire", 99);
const y = new Daire("Çeper", 14);
console.log(x);
console.log(y);

// Not: Parent class'ın constructor'ı varsa ve child class'tada constructor tanımlandıysa super methodu ile parent class'ın constructor'ına değer göndermek zorundayız

// Parent
class Arac {
  marka: string;
  model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Child
class Araba extends Arac {
  // miras alınan class'a yeni özellik ekle
  yakit: string;

  constructor(marka: string, model: string, yakit: string) {
    // parent class'ın constructor'ına değer gönder
    super(marka, model);
    this.yakit = yakit;
  }

  // yeni method
  x() {
    console.log("selam");
  }

  // miras olarak alınan methodu güncelle: Method Overriding
  calistir(): void {
    // parent class'taki calistir methodunu çağır
    super.calistir();

    // farklı bir görev tanımı yapabiliyorum
    console.log("Kontak çevriliyor...");
  }
}

const bmw = new Araba("BMW", "M4", "Benzin");
console.log(bmw);
bmw.calistir();

// Bir class aynı anda birden fazla farklı miras alamaz
// Ama miras alma olayı birden fazla kere gerçekleşebilir

class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color: string = "Kahverenegi";
}

class Mother extends Human {
  eye_color: string = "Mavi";
}

class Son extends Father {}
