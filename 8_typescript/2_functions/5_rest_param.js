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
function toplam(metin) {
    var sayi = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sayi[_i - 1] = arguments[_i];
    }
    console.log(metin);
    console.log(sayi.reduce(function (toplam, i) { return toplam + i; }, 0));
}
toplam("Sonuç", 9, 8, 65, 3, 2, 67, 9);
// örnek
var yoklama = function (teacher) {
    var student = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        student[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yoklamaya başladı");
    console.log("-------------------------------------");
    student.forEach(function (i) { return console.log(i); });
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
var calculator = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var carpim = numbers[0] * numbers[1];
    var toplam = 0;
    numbers.forEach(function (number) {
        return (toplam = number + toplam);
    });
    toplam = toplam - numbers[0] - numbers[1];
    var obje = { carpim: carpim, toplam: toplam };
    return obje;
};
console.log(calculator(5, 2, 5, 5));
// CEVAP
var calculate = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var carpim = 0;
    var toplam = 0;
    num.forEach(function (i) {
        if (i == num[0] && num[1]) {
            carpim = num[i] * num[i];
        }
        else {
            toplam = num[i] + num[i];
        }
    });
    return { carpim: carpim, toplam: toplam };
};
console.log(calculate(12, 45, 18, 21));
