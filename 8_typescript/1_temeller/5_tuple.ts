/*
 * Tuple Type
 * Typescript ile birlikte hayatımıza giren bir veritipidir.
 * Uzunluğu ve elemanlarını sırası/tipi sabit olan diizler tip tanımı için kullanılır.
 
 * Tanım:
 * Bir dizi içerisine tipleri sıralarız
 * Örn: [string,number] 
 */

// Örnek - 1
const ders1: [string, number] = ["edebiyat", 3];
const ders2: [string, number] = ["matematik", 5];

// Örnek - 2
const gradient: [string, number, number] = ["to right", 252525, 123467];

// Örnek - 3
// Bir css rgb/rgba renginin verisini dizi olarak tutalım
// rgb(123,56,78)
// rgba(123,56,78,0.5)

// bu seneryoda sondaki değeri opsiyonel yapmamız gerekir
let color: [number, number, number, number?];

color = [123, 56, 78];
color = [123, 56, 78, 0.5];

// Örnek - 4
//  Birden fazla opsiyonel değer olduğu seneryo
let date: [number, string?, number?];

date = [10, "Ocak", 205];
date = [10, "Ocak"];
date = [10];
date = [10, undefined, 2025];
