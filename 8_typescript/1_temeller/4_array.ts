/*
 * Array Type
 * Typescriptde dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demek yerine bu değişken string değerlerden oluşan bir dizi olucak diyoruz
 * Sonuç olarak dizi olması gerektiğinden ziyede dizzideki elemanların veri tipini söylememiz gerek.
 */

// Örnek - 1
const users: string[] = ["Ali", "Ayşe", "Fatma"];

// typescript bu diziyi manüpüle ederkende tanımlaığımız tipe göre hata verir
users.push("Mahmut");
// users.push({ name: "Beyza" });

// Örnek - 2
const ids: number[] = [45, 67, 89, 24];

// Örnek - 3
const cars: object[] = [{}, {}, {}];

/*
 * Soru: Bir dizinin içerisinde birden fazla tipte eleman olduğu durumda ne yapıyoruz?
 */

const teachers: (string | null)[] = ["Uğur", "Ahmet", null, "Yasin"];

const test: (boolean | number)[] = [true, 43, false];
