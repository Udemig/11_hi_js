// console.log("Hello Js"); Bağlantı kontrolü

// * var,let,const

var kurum = "Udemig";
// var kurum = "Emaartech";

document.write(kurum + "<br/>");

let kişi = "Yusuf YAMAN";
// let kişi = "Bahadır";
kişi = "Selda Evren";

const age = 22;
// age = 32;
// const age = 22;

document.write(kişi + "<br/>");
document.write(age + "<br/>");

// * typeof ==> Bu metot istenilen ifadenin tip kontrolünü yapar.

document.write("Yaş değişkeninin Tipi :" + typeof age + "<br/>");
document.write("Kişi değişkeninin Tipi :" + typeof kişi + "<br/>");
document.write("------------------------------------------" + "<br/>");

let metin =
  "   Hayallerine ulaşmak için attığın her adım,seni o hayalin bir parçası yapar. Vazgeçmediğin sürece, yolu bulman kaçınılmazdır.   ";
document.write("Metin: " + metin + "<br/>");

// * String Metotları:

// ! length ==> Metin ifadelerin karakter sayısını öğrenmek için kullanılır.
document.write("Metin: " + metin.length + "<br/>");

// ! indexOf ==> Metin içerisinde belirtilen ifadenin sırasını bulur.
document.write(
  "Metin içerisinde sürece kelimesinin sırası: " +
    metin.indexOf("sürece") +
    "<br/>"
);
// ! includes ==> Metin içerisinde belirtilen kelime var mı bunu kontrol eder.
document.write(
  "Metin içerisinde Udemig kelimesinin var mı ? : " +
    metin.includes("Udemig") +
    "<br/>"
);
// ! slice ==> Metin ifadesi içerisinde belirlenen aralığı almak için kullanılır.
document.write(
  "Metin içerisinde 44-67 . karakterler arasını al : " +
    metin.slice(44, 67) +
    "<br/>"
);

// ! replace ==> Metin içerisinde belirlenen kelimeyi günceller.
document.write(
  "Metin içerisinde hayalin kelimesini düşü olarak güncelle : " +
    metin.replace("hayalin", "düşün") +
    "<br/>"
);
// !  toLocaleLowerCase ==> Metinlerin her harfini küçük olarak günceller.
document.write(
  "Metin içerisinde her kelime küçük harf : " +
    metin.toLocaleLowerCase() +
    "<br/>"
);
// !  toLocaleUpperCase ==> Metinlerin her harfini küçük olarak günceller.
document.write(
  "Metin içerisinde her kelime büyük harf : " +
    metin.toLocaleUpperCase() +
    "<br/>"
);
// ! trim ==> Metin ifadesinin başında ve sonunda yer alan boşlukları kaldırır.
document.write(
  "Metin içerisinde boşlukları kaldır : " + metin.trim() + "<br/>"
);

/*

*  Javascript Matematiksel ve Mantıksal Operatörler

* +  ==> Toplama ve birleştirme 

* -  ==> Çıkarma

* *  ==> Çarpma

* /  ==> Bölme

* %  ==> Mod

* = ==> Atama

* == ==> Eşitlik Kontrolü
 
* === ==> Denklik Kontrolü : Bu operatör sağında ve solunda yer alan ifadelerin hem tip hem değerlerini kontrol eder.

* != ==> Eşit değildir

* !=== ==> Denk değildir



* > 

* <

* >=

* <=

* && ==> Ve
 
* || ==> Veya

*/

let sayı1 = 44;
let sayı2 = 11;
document.write("------------------------------------------" + "<br/>");
document.write("Sayı1 ve sayı 2 nin toplamı:" + (sayı1 + sayı2) + "<br/>");
document.write("Sayı1 ve sayı 2 nin farkı:" + (sayı1 - sayı2) + "<br/>");
document.write("Sayı1 ve sayı 2 nin çarpımı:" + sayı1 * sayı2 + "<br/>");
document.write("Sayı1 in  sayı 2 ye  bölümü:" + sayı1 / sayı2 + "<br/>");
document.write("Sayı1 in  sayı 2 ye  modu:" + (sayı1 % sayı2) + "<br/>");

sayı1 = sayı1 + 1;
sayı1 = sayı1 + 1;
sayı1 = sayı1 + 1;
document.write("Sayı1:" + sayı1 + "<br/>");
sayı2 = sayı2 - 2;
document.write("Sayı2:" + sayı2 + "<br/>");
sayı2 = sayı2 * 5;
document.write("Sayı2:" + sayı2 + "<br/>");
document.write("------------------------------------------" + "<br/>");

let sayı3 = 45;
document.write("Sayı3:" + sayı3 + "<br/>");
// sayı3 = sayı3 + 1;
sayı3++;
document.write("Sayı3:" + sayı3 + "<br/>");
// sayı3 = sayı3 - 1;
sayı3--;
document.write("Sayı3:" + sayı3 + "<br/>");
// sayı3 = sayı3 + 3;
sayı3 += 3;
document.write("Sayı3:" + sayı3 + "<br/>");
// sayı3 = sayı3 * 10;
sayı3 *= 10;
document.write("Sayı3:" + sayı3 + "<br/>");
// sayı3 = sayı3 / 4;
sayı3 /= 4;
document.write("Sayı3:" + sayı3 + "<br/>");
document.write("------------------------------------------" + "<br/>");

let sayı4 = 120;
let sayı5 = 34;
document.write("Sayı4 Sayı 5 den büyük mü ? : " + (sayı4 > sayı5) + "<br/>");
document.write("Sayı4 Sayı 5 den küçük mü ? : " + (sayı4 < sayı5) + "<br/>");
document.write(
  "Sayı4 Sayı 5 den büyük eşit mi ? : " + (sayı4 >= sayı5) + "<br/>"
);
document.write(
  "Sayı4 Sayı 5 den küçük eşit mi ? : " + (sayı4 <= sayı5) + "<br/>"
);

let sayı6 = "120";
document.write("Sayı4 Sayı 6 den  eşit mi ? : " + (sayı4 == sayı6) + "<br/>");

document.write("Sayı4 Sayı 6 den  eşit mi ? : " + (sayı4 === sayı6) + "<br/>");
document.write("------------------------------------------" + "<br/>");

// * Number Metotları:
let ondalıklıSayı = 13.56787;
document.write("Sayı : " + ondalıklıSayı + "<br/>");

// ! toFixed ==> Ondalıklı sayıların . dan sonra kaç samaktan oluşacağını belirlerim.
document.write(
  "Sayının . dan sonra 2 basamaklı hali : " + ondalıklıSayı.toFixed(2) + "<br/>"
);
// ! Math.round ==> Ondalıklı sayıların en yakın tam sayıya yuvarlanmasını sağlar.
document.write(
  "Sayının . en yakın tam sayıya yuvarlanmış hali : " +
    Math.round(ondalıklıSayı) +
    "<br/>"
);
// ! Math.floor ==> Ondalıklı sayıların en yakın bir alt tam sayıya yuvarlanmasını sağlar.
document.write(
  "Sayının . en yakın bir alt  tam sayıya yuvarlanmış hali : " +
    Math.floor(ondalıklıSayı) +
    "<br/>"
);

// ! Math.ceil ==> Ondalıklı sayıların en yakın bir alt tam sayıya yuvarlanmasını sağlar.
document.write(
  "Sayının . en yakın bir üst  tam sayıya yuvarlanmış hali : " +
    Math.ceil(ondalıklıSayı) +
    "<br/>"
);

// ! Math.random ==> Bu metot sayesinde 0 ile 1 arasında rastgele sayılar oluşturur.
document.write("Rastgele sayı: : " + Math.round(Math.random() * 10) + "<br/>");
document.write("------------------------------------------" + "<br/>");

// * Javascript Fonksiyonlar (Functions)

/*
* Bir işi yapmak için özelleştirlmiş kod bloklarıdır.Ör: Kullanıcıya çıktı vermek,bir işlem yapmak ....


? Fonksiyonlar nasıl kullanılır ?

* Bir fonksyionu kullanmak için önce bu fonksiyonu tanımlamak gerekir.Sonrasında bu fonksiyon çağırılarak kullanılır.

! Bir fonksiyon 'function' anahtar kelimesi ardından bu fonksiyona bir isim verilip sırasıyla () {} konularak tanımlanır.Buradaki {} bloğu içersinde bu fonksiyonun hangi işlemi yapması isteniyorsa bu işlem yazılır.

Bir fonksiyon yukarıda dediğim şekilde tanımlandıktan sonra bu fonksiyonun adı ve yanında () ile çağırılır.

*/
// * Fonksiyonun tanımlanması
function selamla() {
  document.write("Udemig akademi Javascript dersinden selamlar !!!" + "<br/>");
}
// Fonksiyonun çağırılması
selamla();

// ? Fonksiyonlar sadece bu şekilde bir kullanıma mı sahiptir ?

function toplama() {
  let s1 = 23;
  let s2 = 78;
  let sonuç = s1 + s2;
  document.write("Toplama sonuç:" + sonuç + "<br/>");
}
toplama();
toplama();
toplama();

// ? Yukarıda ben bu fonksiyonu kaç defa çağırırsam çağırayım bana hep aynı statik veriler ile işlem yapıyor.Peki nasıl dinamik fonksiyonlar  oluşturacağız ?

// * Bunun için fonksiyonlarda 'parametre' kavramı kullanılır.Fonksiyon adının yanında yeralan () içerisinde bu fonksiyona parametre geçilir.Sonrasında bu parametrelere bağlı işlemler kodlanır.

// Dışarıdan iki değer alan ve bu değerleri toplayan bir fonksiyon oluşturunuz.

function parametreliToplama(x, y) {
  let sonuç = x + y;
  document.write("Toplama sonuç:" + sonuç + "<br/>");
}
// parametreliToplama(); Bu şekilde bir kullanımda 'Nan' (Not a number) [Bir sayı değil] çıktısı verir.Çünkü işlem yapacağı değerleri fonksiyona vermedim.

parametreliToplama(12, 21);
parametreliToplama(12, 65);
parametreliToplama(12, 80);

// todo: Dışarıdan 2 parametre alan ve bu parameterlerin çarpımını ekrana yazdıran fonksiyonu oluşturunuz:

function çarpma(a, b) {
  let sonuç = a * b;
  document.write("Çarpım Sonuç:" + sonuç + "<br/>");
}
çarpma(3, 4);

// ? Peki bir fonksiyonun bir işlemi yapıp sonucu döndürmesi nasıl sağlanır ?

// console.log(sonuç); Bu şekil bir kullanımda sonuç değişkenine erişemedi

// * Fonksiyonlarda dışarıya bir veri çıkarmak için 'return'  kullanılır.

function stokHesapla(girdi, çıktı) {
  let stok = girdi - çıktı;
  return stok;
}

let stokDurum = stokHesapla(100, 15);

document.write("Stok:" + stokDurum + "<br/>");
let stokDurum1 = stokHesapla(100, 150);
document.write("Stok:" + stokDurum1 + "<br/>");
document.write("------------------------------------------" + "<br/>");
// * Return satırında belirlen ifade fonksiyon çağırldığında dışarı aktarılır.

// let sonuç = çarpma(5, 4);
// document.write(sonuç);

// * Javascript Kullanıcıdan Veri Alma (Prompt)

// let kullanıcıSayı = prompt("Bir sayı giriniz");
// let kullanıcıSayı1 = Number(prompt("Bir sayı giriniz"));

// console.log(kullanıcıSayı);
// console.log(kullanıcıSayı1);

// alert("Yazılım Öğrenn !!");

// * Javascript Koşullu Yapılar (if-else)

// Normal hayatta belirli işlemleri belirli koşullara bağlı olarak gerçekleşir.Bu gibi durumların javascript de karşılığı 'if-else' dir.İf 'eğer' demektir.Else ise değilse anlamı katar. Bir koşulu kontrol etmek için bu koşul if kelimesi yanında () açılarak bu () içerisinde yazılır.Bu koşulun gerçekleşmesi durumunda çalışacak kodlar ise {} içerisinde yazılır.Ama buradaki koşul sağlanmazsa çalışması istenen kodlar else {} içerisinde yazılır.

let yaş = 18;

// Eğer yaş 18 den büyükse  'ehliyet alabilir' değilse 'ehliyet alamaz' yazdırın.

if (yaş >= 18) {
  document.write("Ehliyet alabilir " + "<br/>");
} else {
  document.write("Ehliyet alamaz " + "<br/>");
}
document.write("------------------------------------------" + "<br/>");

// ! Eğer if kısımındaki koşul sağlanırsa bu blok çalışır ve else kısımı çalışmaz.Ama eğer if kısımındaki koşul çalışmazsa else kısımındaki blok çalışır. İlk koşuldan sonra eğer başka koşul eklemek istersek bunun için else if kullanılır.Birden fazla koşul sorgusunda eğer son duruma gelindiyse bunun için direkt else yazılır.

// Kullanıcının ortalaması 50 de küçükse 'Kaldınız' 50-64 arasında ise 'Geçtiniz' 64-84 arasında ise 'Teşekkür belgesi' 85 ve yukarısı ise 'Takdir belgesi' yazdırınız.

let ortalama = 85;

if (ortalama < 50) {
  document.write("Kaldınız " + "<br/>");
} else if (ortalama >= 50 && ortalama <= 64) {
  document.write("Geçtiniz " + "<br/>");
} else if (ortalama >= 65 && ortalama <= 84) {
  document.write("Teşekkür Belgesi " + "<br/>");
} else {
  document.write("Takdir Belgesi " + "<br/>");
}

// todo: Pc den 0-100 arasında rastgele bir sayı oluşturmasını isteyiniz.Sonrasında kullanıcıdan bir sayı alınız.Eğer kullanıcıdan alınan sayı ve random sayı eşitse 'Sayılar' 'Eşittir' yazdırınız. Değilse 'Sayılar eşit değildir' yazdırınız.

// 1-) Random sayı oluştur

const randomSayı = Math.round(Math.random() * 100);
console.log(randomSayı);

// 2-) Kullanıcıdan sayı al

let kullanıcıTahmin = Number(prompt("0-100 arasında sayı giriniz:"));
console.log(kullanıcıTahmin);

// 3-) Kullanıcı tahmini ile random sayıyı karşılaştır

if (randomSayı == kullanıcıTahmin) {
  console.log("Sayılar eşittir.");
} else {
  console.log("Sayılar eşit değildir. " + "Random sayı:" + randomSayı);
}
