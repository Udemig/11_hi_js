//* Static kelimesi özelliğin veya methodun sınıfın örneğini almadan kullanmamızı sağlar.
//* Static Method
var Matematik = /** @class */ (function () {
    function Matematik() {
        this.x = 10;
    }
    Matematik.prototype.topla = function (y) {
        console.log(this.x + y);
    };
    Matematik.carp = function (a, b) {
        console.log(a * b);
    };
    return Matematik;
}());
// static olmayan topla methoduna erişelim
var math = new Matematik();
math.topla(19);
// static olan carp methoduna erişme
Matematik.carp(14, 6);
//* Static Property
var Ogrenci = /** @class */ (function () {
    function Ogrenci(isim) {
        this.isim = isim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
var o1 = new Ogrenci("Ali");
var o2 = new Ogrenci("Ahmet");
var o3 = new Ogrenci("Fatma");
console.log(o1, o2, o3);
console.log("toplam öğrenci " + Ogrenci.ogrenciSayisi);
