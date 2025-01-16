/*
 * Typescripte'de bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken ifade etmek yerine fonksiyondan bağımsız bir şekilde type anahtar kelimesinin kulanarak da tanımlayabiliriz.
 */
// 1.yol
var func1 = function (par1, par2) {
    return "Fonksiyon Çalıştı: " + (par1 + par2);
};
var func2 = function (par1, par2) {
    return "Fonksiyon Çalıştı: " + (par1 + par2);
};
var getWeatherInfo = function (city, degree) {
    return degree > 30
        ? "".concat(city, " konumu olduk\u00E7a s\u0131cak ve ").concat(degree, " derecedir")
        : degree > 10
            ? "\"".concat(city, " konumu normal ve ").concat(degree, " derecedir")
            : "".concat(city, " konumu olduk\u00E7a so\u011Fuk ve ").concat(degree, " derecedir");
};
console.log(getWeatherInfo("İstanbul", 5));
