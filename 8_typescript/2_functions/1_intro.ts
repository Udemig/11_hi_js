/*
 * Function
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve fonksiyonun return ettiği değerin tipini tanımlamaktan ibarettir.
 */

// normal fonk
function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu: " + (a + b);
}

hesaplama(45, 78);

// arrow fonk
const hesapla = (a: number, b: number): number => {
  return a + b;
};

const x = hesapla(3, 6);
