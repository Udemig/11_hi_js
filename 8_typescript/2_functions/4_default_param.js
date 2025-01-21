/*
 * Default Param (Varsayılan Değere Sahip Parmatreler)
 
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz bunun yerine varsayılan bir değere sahip olmasını isteriz.
*/
function selamVer(isim) {
    if (isim === void 0) { isim = "Dünya"; }
    console.log("Merhaba ".concat(isim));
}
selamVer("Ali");
selamVer();
// Örnek
var kdvHesapla = function (fiyat, kdv) {
    if (kdv === void 0) { kdv = 18; }
    return fiyat + (kdv / 100) * fiyat;
};
console.log("Varsayılan kdv'li fiyat", kdvHesapla(200));
console.log("%35 kdv'li fiyat", kdvHesapla(200, 35));
