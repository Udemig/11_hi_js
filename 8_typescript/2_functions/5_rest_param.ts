/*
 * Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.
  
 * Özellikler
 * Bir parametreyi rest param haline getirmek için "..." kullanırız.
 * Bir rest paramın ardından herhangi bir farklı parametre yazamıyoruz.
 * Sebebi rest parametrenin kaç tane değer alıcağının belli olmaması.

 * Rest parametre gönderilen değerleri en son diziye çevirir.  
*/

// Örnek
function toplam(metin: string, ...sayi: number[]) {
  console.log(metin);
  console.log(sayi.reduce((toplam, i) => toplam + i, 0));
}
toplam("Sonuç", 9, 8, 65, 3, 2, 67, 9);

// örnek
const yoklama = (teacher: string, ...student: string[]) => {
  console.log(teacher + " öğretmen yoklamaya başladı");
  console.log("-------------------------------------");
  student.forEach((i) => console.log(i));
  console.log(student.length + " öğrenci var");
};
yoklama("ali", "ahmet", "mehmet", "ayşe");

/*
 * Challange
 * İstenildiği kadar sayı değerini parametre olarak alan bir fonksiyon yazınız.
 * Aldığı ilk 2 parametreyi çarpsın
 * İlk 2 parametreden geriye kalan diğer bütün parametreleri toplasın
 * Toplam ve çarpım değerlerini bir nesne içerisinde döndürsün 

 * hesapla(2,3,5,6,8)
 * {carpim:6,toplam:19}
*/

// CEVAP
const calculator = (...numbers: number[]) => {
  let carpim = numbers[0] * numbers[1];
  let toplam = 0;

  numbers.forEach((number) => {
    return (toplam = number + toplam);
  });

  toplam = toplam - numbers[0] - numbers[1];

  let obje = { carpim: carpim, toplam: toplam };

  return obje;
};

console.log(calculator(5, 2, 5, 5));

// CEVAP
const calculate = (...num: number[]) => {
  let carpim = 0;
  let toplam = 0;

  num.forEach((i) => {
    if (i == num[0] && i === num[1]) {
      carpim = num[i] * num[i];
    } else {
      toplam = num[i] + num[i];
    }
  });

  return { carpim, toplam };
};

console.log(calculate(12, 45, 18, 21));
