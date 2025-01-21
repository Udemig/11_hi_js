/*
 * Constructor:  İnşa Methodu
 * Constructor methodu oluşturlan nesnenin değlerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirin kopyası olmaz.
 * Constructor new  anahtar kelimesi ile class çağrıldığında ilk çalışan methoddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz.
 */

class Person {
  // 1) sınıfın ana özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  // 2) constructor ile dışarıdan yukarıdaki tanımlanan özelliklere değer ataması yapabilyoruz
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  tanit() {
    console.log(
      `Selam, ben ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım`
    );
  }
}

const kisi1 = new Person("Burak", "Musa", 45);
kisi1.tanit();

const kisi2 = new Person("Can", "Dost", 23);
kisi2.tanit();

/*
 * Challange:
 * Bir teknolojik/ev aleti için bir class oluşturun.
 * Bu class'tan oluşturuduğunu nesneler değerlerini constructor'dan alsın.
 * Class en az 4 özellik ve 1 methoda sahip olsun
 * Bu class'tan en az 1 örnek oluşturun (new)
 */

// CEVAP
class TV {
  power: string;
  model: string;
  price: number;
  brand: string;

  constructor(power: string, model: string, price: number, brand: string) {
    this.power = power;
    this.model = model;
    this.price = price;
    this.brand = brand;
  }

  getDetails() {
    console.log(
      `TV, ${this.brand} marka, ${this.model} modeldir. Gücü ${this.power} ve fiyat ${this.price} euro'dur.`
    );
  }
}

const tv1 = new TV("290W", "Smart", 25000, "Lg");
tv1.getDetails();

// CEVAP
class Tool {
  name: string;
  kind: string;
  brand: string;
  warranty_period: string;
  constructor(
    name: string,
    kind: string,
    brand: string,
    warranty_period: string
  ) {
    this.name = name;
    this.kind = kind;
    this.brand = brand;
    this.warranty_period = warranty_period;
  }
  promotion() {
    console.log(
      ` Ürünün ismi ${this.name}  ${this.kind} için kullanılmalıdır, sakın başka bi yer de kullanmayın. Modeli ${this.brand}'dir. Garanti süresi ${this.warranty_period}'dir`
    );
  }
}

const coffeMachine = new Tool("kahve makinesi", "mutfak", "suzuki", "3");
coffeMachine.promotion();
