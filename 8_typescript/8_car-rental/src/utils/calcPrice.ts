import { ICar } from "../types";

function calcPrice(car: ICar): number {
  let basePrice = 1000; // TL cinsinden temel günlük kira ücreti

  // Yakıt maliyetine göre fiyat artışı
  basePrice += car.fuelcost08 * 2;

  // Motor hacmi büyükse fiyat artışı
  if (car.displ > 3.0) {
    basePrice += 700;
  } else if (car.displ > 2.0) {
    basePrice += 500;
  } else {
    basePrice += 300;
  }

  // CO2 emisyonu yüksekse fiyat artışı
  if (car.co2 > 400) {
    basePrice += 500;
  } else if (car.co2 > 300) {
    basePrice += 300;
  }

  // Yakıt ekonomisi düşükse (daha fazla yakıt tüketiyorsa) fiyat artışı
  if (car.comb08 < 20) {
    basePrice += 400;
  } else if (car.comb08 < 30) {
    basePrice += 200;
  }

  // Model yılına göre fiyat değişimi
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(car.year);

  if (age <= 2) {
    basePrice += 600; // Yeni araçlar daha pahalı
  } else if (age >= 10) {
    basePrice -= 400; // Eski araçlar daha ucuz
  }

  return Math.round(basePrice); // Sonucu tam sayıya yuvarlıyoruz
}

export default calcPrice;
