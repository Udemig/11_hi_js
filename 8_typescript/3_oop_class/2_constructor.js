/*
 * Constructor:  İnşa Methodu
 * Constructor methodu oluşturlan nesnenin değlerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirin kopyası olmaz.
 * Constructor new  anahtar kelimesi ile class çağrıldığında ilk çalışan methoddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz.
 */
var Person = /** @class */ (function () {
    // 2) constructor ile dışarıdan yukarıdaki tanımlanan özelliklere değer ataması yapabilyoruz
    function Person(yeni_ad, yeni_soyad, yeni_yas) {
        this.ad = yeni_ad;
        this.soyad = yeni_soyad;
        this.yas = yeni_yas;
    }
    Person.prototype.tanit = function () {
        console.log("Selam, ben ".concat(this.ad, " ").concat(this.soyad, " ve ").concat(this.yas, " ya\u015F\u0131nday\u0131m"));
    };
    return Person;
}());
var kisi1 = new Person("Burak", "Musa", 45);
kisi1.tanit();
var kisi2 = new Person("Can", "Dost", 23);
kisi2.tanit();
/*
 * Challange:
 * Bir teknolojik/ev aleti için bir class oluşturun.
 * Bu class'tan oluşturuduğunu nesneler değerlerini constructor'dan alsın.
 * Class en az 4 özellik ve 1 methoda sahip olsun
 * Bu class'tan en az 1 örnek oluşturun (new)
 */
// CEVAP
var TV = /** @class */ (function () {
    function TV(power, model, price, brand) {
        this.power = power;
        this.model = model;
        this.price = price;
        this.brand = brand;
    }
    TV.prototype.getDetails = function () {
        console.log("TV, ".concat(this.brand, " marka, ").concat(this.model, " modeldir. G\u00FCc\u00FC ").concat(this.power, " ve fiyat ").concat(this.price, " euro'dur."));
    };
    return TV;
}());
var tv1 = new TV("290W", "Smart", 25000, "Lg");
tv1.getDetails();
// CEVAP
var Tool = /** @class */ (function () {
    function Tool(name, kind, brand, warranty_period) {
        this.name = name;
        this.kind = kind;
        this.brand = brand;
        this.warranty_period = warranty_period;
    }
    Tool.prototype.promotion = function () {
        console.log(" \u00DCr\u00FCn\u00FCn ismi ".concat(this.name, "  ").concat(this.kind, " i\u00E7in kullan\u0131lmal\u0131d\u0131r, sak\u0131n ba\u015Fka bi yer de kullanmay\u0131n. Modeli ").concat(this.brand, "'dir. Garanti s\u00FCresi ").concat(this.warranty_period, "'dir"));
    };
    return Tool;
}());
var coffeMachine = new Tool("kahve makinesi", "mutfak", "suzuki", "3");
coffeMachine.promotion();
