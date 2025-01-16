/*
 * Typescripte'de bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken ifade etmek yerine fonksiyondan bağımsız bir şekilde type anahtar kelimesinin kulanarak da tanımlayabiliriz.
 */

// 1.yol
const func1 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı: " + (par1 + par2);
};

// 2.yol
type FuncType = (par1: string, par2: number) => string;

const func2: FuncType = (par1, par2) => {
  return "Fonksiyon Çalıştı: " + (par1 + par2);
};

// Yukarıdaki 2. yolu kullanarak bir fonksiyon tipi tanımlayalım
// * Kişnin bulunduğğu il ve dereceyi parametre olarak alsın
// * derece 30'dan fazlaysa "... konumu oldukça sıcak ve ... derecedir"
// * derece 30'dan fazlaysa "... konumu normal ve ... derecedir"
// * derece 10'dan azsa "... konumu oldukça soğuk ve ... derecedir"
// şeklinde bir fonksiyon yazınız

// Cevap
type WeatherFunction = (city: string, degree: number) => string | undefined;

const getWeatherInfo: WeatherFunction = (city, degree) => {
  return degree > 30
    ? `${city} konumu oldukça sıcak ve ${degree} derecedir`
    : degree > 10
    ? `"${city} konumu normal ve ${degree} derecedir`
    : `${city} konumu oldukça soğuk ve ${degree} derecedir`;
};

console.log(getWeatherInfo("İstanbul", 5));
