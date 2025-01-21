/*
 * Default Param (Varsayılan Değere Sahip Parmatreler)
 
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz bunun yerine varsayılan bir değere sahip olmasını isteriz.
*/

function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

// Örnek
const kdvHesapla = (fiyat: number, x?: string, kdv: number = 18): number => {
  return fiyat + (kdv / 100) * fiyat;
};

console.log("Varsayılan kdv'li fiyat", kdvHesapla(200));
console.log("%35 kdv'li fiyat", kdvHesapla(200, "35"));
console.log("%35 kdv'li fiyat", kdvHesapla(200, undefined, 35));
