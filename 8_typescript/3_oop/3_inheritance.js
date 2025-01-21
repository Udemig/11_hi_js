/*
 * Inheritance (Kalıtım | Miras)

 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.

 * Miras herzaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında geçekleşir

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alabilir.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent Class
var GeometrikSekil = /** @class */ (function () {
    function GeometrikSekil(ad) {
        this.ad = ad;
    }
    GeometrikSekil.prototype.tanim = function () {
        console.log("Bu bir ".concat(this.ad, " \u015Feklidir"));
    };
    return GeometrikSekil;
}());
// Derived Class - Constructor Yok
var Dikdortgen = /** @class */ (function (_super) {
    __extends(Dikdortgen, _super);
    function Dikdortgen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uzunluk = 40;
        _this.genilik = 40;
        return _this;
    }
    return Dikdortgen;
}(GeometrikSekil));
var d = new Dikdortgen("Dikdörgen");
d.tanim();
// Derived Class - Constructor Var
var Daire = /** @class */ (function (_super) {
    __extends(Daire, _super);
    function Daire(ad, yaricap) {
        var _this = _super.call(this, ad) || this; // Parent class'ın constructor'ına değer gönder
        _this.yaricap = yaricap;
        return _this;
    }
    return Daire;
}(GeometrikSekil));
var x = new Daire("Daire", 99);
var y = new Daire("Çeper", 14);
console.log(x);
console.log(y);
// Not: Parent class'ın constructor'ı varsa ve child class'tada constructor tanımlandıysa super methodu ile parent class'ın constructor'ına değer göndermek zorundayız
// Parent
var Arac = /** @class */ (function () {
    function Arac(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor");
    };
    return Arac;
}());
// Child
var Araba = /** @class */ (function (_super) {
    __extends(Araba, _super);
    function Araba(marka, model, yakit) {
        // parent class'ın constructor'ına değer gönder
        var _this = _super.call(this, marka, model) || this;
        _this.yakit = yakit;
        return _this;
    }
    // yeni method
    Araba.prototype.x = function () {
        console.log("selam");
    };
    // miras olarak alınan methodu güncelle: Method Overriding
    Araba.prototype.calistir = function () {
        // parent class'taki calistir methodunu çağır
        _super.prototype.calistir.call(this);
        // farklı bir görev tanımı yapabiliyorum
        console.log("Kontak çevriliyor...");
    };
    return Araba;
}(Arac));
var bmw = new Araba("BMW", "M4", "Benzin");
console.log(bmw);
bmw.calistir();
