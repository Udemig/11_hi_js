/*
 * Access Modifiers - Erişim Belirteçleri
 
 * Class elemanları ile hasas bilgiler tutucağımız zaman bu bilgilerin class'ın dışarısından erişilip erişilmeyeceğini belirtmek isteriz

 * 3 adet erişim belirteçleri

 * public: hem class dışarısından hemde class'ı miras alan diğer class'lardan erişilebilir
 * proteceted: class'ın dışarısında erişilemez ama class'ı miras alan diğer class'lardan erişilebilir
 * private: hem clas'ın dışarısından hemde class'I miras alan diğer class'lardan erişilemez
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
var Arac1 = /** @class */ (function () {
    function Arac1(marka) {
        this.marka = "BMW";
        this.model = "M4";
        this.year = 2020;
        this.marka = marka;
    }
    Arac1.prototype.tanit = function () {
        console.log(this.marka); // class'ın içerisinden erişim
    };
    return Arac1;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motor.prototype.calistir = function () {
        console.log(this.marka); // miras alan class'ın içerisinden erişim
    };
    return Motor;
}(Arac1));
var arac = new Arac1("Mercedes");
arac.marka; // class'ın dışarısında erişim
