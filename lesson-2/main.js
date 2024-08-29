// todo: Kullanıcıdan alınan iki adet sayıyı gene kullanıcıdan alınan diğer sayı 1 ise toplayan 2 ise çıkaran 3 ise çarpan 4 ise bölen bir fonksiyon oluşturunuz.İşlem sonucunu ekrana basınız.

// 1-) İşlem tipini belirle

// let işlemTürü = Number(
//   prompt(
//     "İşlem türünü giriniz: \n 1-Toplama \n 2-Çıkarma \n 3-Çarpma \n 4-Bölme \n"
//   )
// );
// // 2-) Kullanıcıdan sayılar al
// let sayı1 = Number(prompt("Sayı 1 i giriniz:"));
// let sayı2 = Number(prompt("Sayı 2 i giriniz:"));
// // 3-) Fonksiyon oluştur
// function işlemYap(i, s1, s2) {
//   if (i == 1) {
//     let sonuç = s1 + s2;
//     document.write("Sonuç:" + sonuç + "<br/>");
//   } else if (i == 2 ) {
//     let sonuç = s1 - s2;
//     document.write("Sonuç:" + sonuç + "<br/>");
//   } else if (i == 3) {
//     let sonuç = s1 * s2;
//     document.write("Sonuç:" + sonuç + "<br/>");
//   } else {
//     let sonuç = s1 / s2;
//     document.write("Sonuç:" + sonuç + "<br/>");
//   }
// }

// işlemYap(işlemTürü, sayı1, sayı2);

// let kişi1 = "Yusuf YAMAN";
// let kişi2 = "Selda Evren";
// let kişi3 = "Çağdaş Altınışık";
// let kişi4 = "Ali Göktaş";

// * Javascript Diziler (Array)

// * Diziler birden fazla veriyi sıralı şekilde depolamak için kullanılan veri yapılarıdır.Bu yapılar hem verileri bir arada tutmamızı hemde sahip olduğu metotlar sayesinde kolayca yönetmemizi sağlar.

// ? Diziler nasıl tanımlanır ?

// * Javascript dizileri tıpkı değişken tanımlar gibi anahtar kelimeler(var,let,const) kullanılarak ve bu kelimelerin yanına diziye bir ad verilip = [] şeklinde tanımlanır.Buradaki [] içerisinde dizinin elemanları yazılır.

let kişiler = ["Yusuf YAMAN", "Selda Evren", "Çağdaş Altınışık", "Ali Göktaş"];

document.write("Kişiler:" + kişiler + "<br/>");
document.write("Kişilerin 1. elemanı:" + kişiler[0] + "<br/>");
document.write("Kişilerin 2. elemanı:" + kişiler[1] + "<br/>");
document.write("Kişilerin 3. elemanı:" + kişiler[2] + "<br/>");

// Yukarıda görüldüğü üzre dizilerin gerek tüm elemanlarına gerekse istenilen elemanına erişebiliriz.Ama istenilen eleman erişmeye çalışırken bir tık hatalı bir yapı karşıma çıktı.Ben 1. elemanı getir dediğimde bana 2 . elemanı getirdi.Bunun sebebi dizilerin elemanlarını 1,2,3,... şeklinde değilde 0,1,2,... düzeninde saymasıdır.Buradaki dizi elemanlarının bu şekilde sıralanması dizilerde 'index' kavramında kaynaklanır.Bundan dolayı eğer biz 1. elemana erişeceksek bunun için dizinin 0. index ini belirtmeliyiz.Kısacası istenilen sıradaki elemana erişmek için bu sayının 1 eksik index i belirtilir.

let sayılar = [0, 1, 2, 3, 4, 5, 6, 7];
document.write("Sayılar:" + sayılar + "<br/>");

let dizi = [1, 2, 3, "Udemig", "Malatya", 44, "Ankara"];
document.write("Karma Dizi:" + dizi + "<br/>");
document.write("-------------------------------------------------" + "<br/>");

// ? Peki dizilerin sahip olduğu metotlar nelerdir?

let arabalar = ["BMW", "AUDİ", "MERCEDES", "VOLKSWAGEN", "OPEL"];

document.write("Arabalar:" + arabalar + "<br/>");

// ! length ==> Dizinin uzunluğunu ölçer.
document.write("Arabalar Dizisi Uzunluğu:" + arabalar.length + "<br/>");
// ! push ==> Dizinin sonuna eleman ekler.
arabalar.push("FORD");
document.write("Arabalar-1:" + arabalar + "<br/>");
// ! pop ==> Dizinin sonundan eleman çıkarır.
arabalar.pop();
document.write("Arabalar-2:" + arabalar + "<br/>");
// ! unshift ==> Dizinin başına eleman ekler.
arabalar.unshift("TESLA");
document.write("Arabalar-3:" + arabalar + "<br/>");
// ! shift ==> Dizinin başından eleman kaldırır.
arabalar.shift();
document.write("Arabalar-4:" + arabalar + "<br/>");
// ! Dizinin bir elemanını güncelleme.
arabalar[4] = "RENAULT";
document.write("Arabalar-5:" + arabalar + "<br/>");
arabalar.push("ALFA ROMEO");
arabalar.push("CITROEN");
arabalar.push("HONDA");
document.write("Arabalar-6:" + arabalar + "<br/>");
// ! slice ==> Dizinin istenilen aralığını alabilirim.
document.write("Arabalar-7:" + arabalar.slice(2, 5) + "<br/>");
// ! indexOf ==> Dizinin içerisindeki belirtilen elemanın sırasını alır.
document.write("Arabalar-8:" + arabalar.indexOf("RENAULT") + "<br/>");
// ! includes ==> Dizinin içerisinde belirtilen eleman var mı kontrol eder.
document.write("Arabalar-7:" + arabalar.includes("MERCEDES") + "<br/>");
//  ! concat ==> Bir diziyi başka dizi  veya diziler yada elemanlar ile birleştirmek için kullanılır.
let yeniDizi = arabalar.concat(kişiler, sayılar, "Udemig", 12345432);
document.write("Yeni Dizi:" + yeniDizi + "<br/>");
// ! sort  ==> Dizinin elemanlarını sıralar.
let sıralıArabalar = arabalar.sort();
document.write("Yeni Arabalar:" + sıralıArabalar + "<br/>");
document.write("-------------------------------------------------" + "<br/>");

let numbers = [12, 432, 543, 7658, 23458, 9876];

let sıralıNumbers = numbers.sort(function (x, y) {
  return x - y;
});

document.write("Sayılar:" + numbers + "<br/>");

document.write("Sıralı Sayılar:" + sıralıNumbers + "<br/>");
document.write("-------------------------------------------------" + "<br/>");

// Sort metodu stringlerde düzgün çalışırken sayılarda bir tık hatalı çalışır.Bunun sebebi sayıları sıralarken ilk basamağa bakmasıdır.Biz ise bu hatayı düzeltmek için bu metoda bir fonksiyon yazarız.

// ! filter ==> Dizilerde filtreleme yapar.
document.write("Sayılar:" + numbers + "<br/>");
let filtrelenmişDizi = numbers.filter(function (x) {
  return x > 1000;
});
document.write("Filtrelenmiş Dizi:" + filtrelenmişDizi + "<br/>");

let yeniSayılar = [123, 456, 765, 234, 874, 967];

// ? Yukarıdaki dizinin elemanlarından çift olanları filtreleyiniz.
let çiftSayılar = yeniSayılar.filter(function (x) {
  return x % 2 === 0;
});
document.write("Dizi:" + yeniSayılar + "<br/>");
document.write(
  "Dizi:" +
    çiftSayılar.sort(function (a, b) {
      return a - b;
    }) +
    "<br/>"
);
document.write("-------------------------------------------------" + "<br/>");

let newArray = [
  "Yusuf",
  "Cihan",
  "Ömer Faruk",
  "Humay",
  "İnayet",
  "Meryem",
  "Metin",
];
let newArray1 = [1, 2, 3, 4, 5];
document.write("Yeni  Kişiler:" + newArray + "<br/>");
// document.write("Yeni  Kişiler:" + newArray[0] + "<br/>");
// document.write("Yeni  Kişiler:" + newArray[1] + "<br/>");
// document.write("Yeni  Kişiler:" + newArray[2] + "<br/>");
newArray.forEach(function (eleman, index) {
  document.write("Dizinin Elemanı:" + newArray[index] + "<br/>");
});

let newArray2 = newArray1.map(function (x) {
  return x * 2;
});
document.write("Dizi * 2:" + newArray2 + "<br/>");

// ? map ve forEach arasındaki fark nedir ?

// * forEach bir dizinin elemanlarını döner.Ama bu elemanlara müdahale edemez.

// * map ise bir dizinin elemanlarını döner ve geriye yeni bir dizi daha oluşturur.Bu metot bir dizinin elemanlarına müdahale etmek(2 ile çarpmak,...) için kullanılır.

// ? Peki nerede map nerede forEach kullanacağız ?

// * Eğer bir diziyi dönüp bu dizinin elemanları üzerinde işlem yapacaksanız map sadece dizinin elemanlarını dönecekseniz forEach kullanılır.

// * Javascript Objeler (Object):

// * Objeler içerisinde key-value(anahtar-değer) çiftleri halinde veriler tutan yapılardır.Objeler tıpkı değişkenlerdeki gibi  anahtar kelime yanına bu obje bir isim sonrasında ise = dedikten sonra {} yazılır.Bu {} içerisinde anahtar-değer çifti şeklinde ifadeler yazılır.

let person = {
  ad: "Yusuf",
  soyad: "YAMAN",
  cinsiyet: "Erkek",
  yaş: 22,
  eğitimSeviyesi: "Üniversite",
  hobiler: ["yazılım", "müzik dinlemek", "spor yapmak"],
  tanıtım: function () {
    document.write("Kişi Tanıtım:" + this.ad + this.soyad + "<br/>");
  },
};

console.log(person);
console.log(person.ad);
console.log(person.soyad);
console.log(person.yaş);
console.log(person.hobiler);
console.log(person.hobiler[0]);
person.tanıtım();
document.write("-------------------------------------------------" + "<br/>");

// * Date(Tarih) Objesi
// ! Tarih Objesi
let tarih = new Date();
document.write("Tarih:" + tarih + "<br/>");
// ! Tarih Objesi içerisinden günü alma
let gün = tarih.getDate();
document.write("Gün:" + gün + "<br/>");
// ! Tarih Objesi içerisinden günü haftanın kaçıncı günü olduğunu alma
let gün1 = tarih.getDay();
document.write("Gün1:" + gün1 + "<br/>");
// ! Tarih Objesi içerisinden ayı alma
let ay = tarih.getMonth();
document.write("Ay:" + (ay + 1) + "<br/>");
// ! Tarih Objesi içerisinden dakikayı alma
let dakika = tarih.getMinutes();
document.write("Dakika:" + dakika + "<br/>");
// ! Tarih Objesi içerisinden saati alma
let saat = tarih.getHours();
document.write("Saat:" + saat + "<br/>");
// ! Tarih Objesi içerisinden saniyeyi alma
let saniye = tarih.getSeconds();
document.write("Saniye:" + saniye + "<br/>");

let genelTarih = tarih.toDateString();
document.write("Genel Tarih:" + genelTarih + "<br/>");
let genelSaat = tarih.toLocaleTimeString("tr-TR");
document.write("GenelSaat:" + genelSaat + "<br/>");

document.write("-------------------------------------------------" + "<br/>");

// * Javascript Switch-Case Yapısı:

//  * Bu yapı bir ifadenin belirli sayıda değerine bağlı olarak işlem yapmak için kullanılır.Ör: Haftanın hangi günü ise buna bağlı olarak bir çıktı ver.

let day = 99;

switch (day) {
  case 1:
    document.write("Pazartesi:" + "<br/>");
    break;
  case 2:
    document.write("Salı:" + "<br/>");
    break;
  case 3:
    document.write("Çarşamba:" + "<br/>");
    break;
  case 4:
    document.write("Perşembe:" + "<br/>");
    break;
  case 5:
    document.write("Cuma:" + "<br/>");
    break;
  case 6:
    document.write("Cumartesi:" + "<br/>");
    break;
  case 7:
    document.write("Pazar:" + "<br/>");
    break;
  default:
    document.write("Tanımsız Gün:" + "<br/>");
}

// todo: Kurs türü değişkenin değeri 1 ise 'Frontend' 2 ise 'Backend' 3 ise 'React Native' 4 ise 'İngilizce' 5 ise 'Swift/İos' bunlardan herhangi biri değilse 'Tanımsız Kurs' yazdırınız.

let kurs = 5;

switch (kurs) {
  case 1:
    document.write("Frontend" + "<br/>");
    break;
  case 2:
    document.write("Backend" + "<br/>");
    break;
  case 3:
    document.write("React Native" + "<br/>");
    break;
  case 4:
    document.write("İngilizce" + "<br/>");
    break;
  case 5:
    document.write("Swift/İos" + "<br/>");
    break;
  default:
    document.write("Tanımsız Kurs" + "<br/>");
}
document.write("-------------------------------------------------" + "<br/>");

// * Javascript Tekrar Gerektiren Durumlar (Döngüler) [Loop]

// * For Döngüsü

// For döngüsü bizden 3 değer ister.Birincisi bir sayaç,ikincisi bu sayacın dolayısıyla bu döngünün nerede biteceği birde sayacın nasıl artacağı.Eğer buradaki sayaç belirtilen şartı sağlıyor ise {} içerisindeki kod çalışır.

for (let sayaç = 0; sayaç <= 10; sayaç++) {
  if (sayaç == 3) {
    continue; // Sayaç 3 ise bu kısımı pas geç
  }
  if (sayaç == 6) {
    break; // Sayaç 6 ise durdur
  }
  document.write("Kişinin " + sayaç + " ncı şınavı" + "<br/>");
}

// let counter = 0;
// document.write("Sayaç " + counter + "<br/>");
//  counter = counter + 1;
// counter++;
// document.write("Sayaç " + counter + "<br/>");

// todo: 0 dan başlayarak 2 şer 2 şer 50 ye kadar sayıları yazdır.

for (let counter = 0; counter <= 50; counter += 2) {
  document.write(counter + "<br/>");
}
document.write("-------------------------------------------------" + "<br/>");

// * While Döngüsü

// * Bu döngü bir şart ister.Ve eğer bu şart sağlanıyorsa döngüyü çalıştırır.Ama bu döngü belirtilen şart sürekli sağlandından döngü sonsuz döngüye girer.Bundan dolayı program kasar.Kasmaması için belirtilen ifade kod çalışınca güncellenmelidir.(sayı++)

let sayı = 0;

while (sayı < 10) {
  document.write(sayı + "<br/>");
  sayı++;
}
document.write("-------------------------------------------------" + "<br/>");

// * Do While

let number = 110;

do {
  document.write("Sayı:" + number + "<br/>");
  number++;
} while (number <= 10);

// * Do while döngüsünün while dan farkı do while yapması gereken işlemi yapar.Sonrasında belirtilen şartı kontrol eder.
