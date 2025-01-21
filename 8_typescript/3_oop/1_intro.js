/*
 * OOP (Object Orianted Programming)
 * Nesne Yönelimli Programlama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler arasında yapmaya çalışır.

 * OOP'nin temel kavramları:

 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface (jsde yok ama tsde var)
  
 * OOP'nin temel amacı, kodun daha anlaşılır, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. BU yaklaşım büyük ve projelerde faydalı olur
*/
/*
 * Sınıf (Class): Sınıflar, nesnelerin şablonudur.
 * Bir sınıf, belirli bir türdeki nesneler için veri ve fonksiyonları tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olucağı özllikler (renk,marka,şanzıman) ve davranışlar (hızlama,fren,vites) tanımlanabilir
 */
var OldPhone = /** @class */ (function () {
    function OldPhone() {
        //* properties (özellikleri)
        this.telefon_tipi = "entegre";
        this.tus_takimi = "çevrimeli";
        this.govde = "yatay";
    }
    //* methods (fonksiyonları)
    OldPhone.prototype.ahizeAc = function () {
        console.log("ahize açılıyor..");
    };
    OldPhone.prototype.numaraCevir = function (telNum) {
        console.log(telNum + "çalıyor...");
    };
    return OldPhone;
}());
/*
 * Class Kullanımı
 * Class'ı tanımlamak tek başına bir şey ifade etmez.
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan sonra çağırı ve görevini yapar.
 * Class'larda da durum aynıdır class'ı new anahta kelimesi çağırırız ve bir nesne oluşturur.
 * Class'ın oluşturduğu bu nesneye instance (örnek) denir
 */
var telefon_1 = new OldPhone();
var telefon_2 = new OldPhone();
telefon_2.tus_takimi = "tuşlu";
telefon_2.govde = "dikey";
telefon_2.telefon_tipi = "ayrılmış";
console.log(telefon_1);
console.log(telefon_2);
telefon_1.ahizeAc();
telefon_1.numaraCevir("+905667788");
