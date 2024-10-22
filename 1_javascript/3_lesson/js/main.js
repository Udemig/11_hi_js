// console.log("Bağlantı kontrolü");

import { data } from "./second.js";
import kişiTanıtım from "./helper.js";
import { fetchUser } from "./api.js";

// * For in Döngüsü

// Bu döngü bir objedeki elemanları tek tek dönmek için kullanılır

let student = {
  name: "Ali",
  surname: "Göktaş",
  age: 35,
  country: "Türkiye",
};

for (const udemig in student) {
  document.write("Öğrenci: " + student[udemig] + "<br/>");
}
document.write("-----------------------------------" + "<br/>");

// * For of Döngüsü

// *  Bu döngü dizideki elemanların tek tek dönmek için kullanılır

let numbers = [1, 2, 3, 4, 5];

for (const sayı of numbers) {
  document.write("Sayılar: " + numbers + "<br/>");
}
document.write("-----------------------------------" + "<br/>");

// * Set Yapısı

// * Bu yapı tekrarlanan değerleri kabul etmeyen ve her öğe için sadece bir kez kabul edilen koleksiyonlar oluşturmak için kullanır.

const kişiler = new Set(["Yusuf", "Ahmet", "Erhan", "Selda"]);

kişiler.add("Cihan");
kişiler.add("Ahmet");
kişiler.add("Emine");
kişiler.add(44);
// console.log(kişiler);
// console.log(kişiler.has("Yusuf"));
// * Map Yapısı

// * Bu yapı key-value(anahtar-değer) çiftleri halinde değerler tutmak için kullanılır

const öğrenciler = new Map([
  ["Yusuf", 44],
  ["Selda", 67],
  ["Humay", 423],
  ["Metin", 45],
]);
öğrenciler.set("Yusuf", 34);
öğrenciler.set("Ahmet", 34);

// console.log(öğrenciler);

for (const eleman of öğrenciler) {
  document.write("Eleman: " + eleman[1] + "<br/>");
}
document.write("-----------------------------------" + "<br/>");

// * Javascript Hosting

// * Javascript bir dosyayı okumaya başlarken ilk olarak bu dosya içerisinde yer alan değişkenleri okur ve bunları en başta tutar.Başlangıç değerini ise 'undefined' olarak ayarlar.Aonrasında kodları satır satır okur ve uygun değerleri gereken kısımlara yerleştirir.

// console.log(yaş);

// var yaş = 22;

// console.log(yaş);

// * Literal Templates (Backtick)

// Şimdiye kadar değişken ve string ifadeleri bir arada kullanırken string ifadeleri '' içerisinde yazıp değişkenleri ise direkt olarak yazdık.Fakat bunları birleştirirken sıkıntlar yaşadık.İşte bu sıkıntıyı es6 (javascript in en güncel sürümü) sürümü ile gelen backtick(``) kullanımı ile değişken ve string ifadeler daha rahat kullanılacaktır.Backtick mac lerde (option + ,) windoslarda ise (altgr + , ) ile oluşturulur.Bu yapı içerisinde stringler direkt yazılırken değişkenler ${} içerisinde yazılır

let fullName = "Yusuf YAMAN";

document.write(
  "1-) Klasik: Benim adım " + fullName + " senin adın nedir ?" + "<br/>"
);
document.write(`2-) Backtick: Benim adım ${fullName} senin adın nedir ? <br/>`);

// todo : Kullanıcının 3 hakkı vardır.Bu kullanıcı pc tarafından oluşturulan 0-100 arasındaki bir sayıyı tahmin etsin.Eğer doğru bilirse 'Bildiniz'; tahmin random sayıdan büyükse daha küçük bir tahmin yapsın;tahmin random sayıdan küçükse daha büyük tahmin yapsın.Hakkı kalmadıysa 'Hakkınız kalmadı' diyen code-script i yazınız.

// let hak = 0;
// let randomSayı = Math.round(Math.random() * 100);
// console.log(randomSayı);

// while (hak <= 3) {
//   let tahmin = Math.round(prompt("Tahmin Giriniz :"));
// //   if (tahmin=='')
//   if (!tahmin) {
//     alert("Tahmin Giriniz !!");
//   } else if (tahmin == randomSayı) {
//     document.write(`Tebrikler Doğru bildiniz`);
//   } else if (tahmin > randomSayı) {
//     alert("Daha küçük tahmin giriniz !!");
//   } else {
//     alert("Daha büyük tahmin giriniz !!");
//   }
//   hak++;
//   if (hak === 3) {
//     document.write(`Haklarınız Bitti ${randomSayı}`);
//   }
// }

// * Try- Catch Yapısı

// Bu yapı bir işlem yapılırken süreci kontrol etmek için kullanılır.'try' kısımında istenilen işlem yaptırılır.Catch kısımında ise bu işlem yapılırken bir hata olması durumunda hataya bağlı olarak çalışacak işlemler yapılır.Tüm bunların haricinde final kısımında çalışması istenenler ise finally kısımında yazılır.

try {
  document.write(`İşlem Yapılıyor <br/>`);
  throw "İşlem Başarısız !!";
} catch (error) {
  document.write(`Hata: ${error}  <br/>`);
} finally {
  document.write(`İşlem bitti  <br/>`);
}
document.write("-----------------------------------" + "<br/>");

// * Javascript Scope(Kapsam) Kavramı

// Javascript 'scrope' kavramı bir değişkenin yada fonksiyonun hangi alan içerisinde erişilebilir olduğunu belirler.Kapsam olarak elemanları temelde ikiye ayırabiliriz:

// * 1-) Global Kapsam: Bir değişkenin veya fonksiyonun tüm dosyada erişilebilir olduğu kapsamdır.

// * 2-) Yerel Kapsam: Bir değişkenin veya fonksiyonun yanlızca tanımlandığı kod kısımında  erişilebilir olduğu kapsamdır.

let kullanıcıİsimi = "Yusuf YAMAN";
document.write(`Kullanıcı Adı: ${kullanıcıİsimi} <br/>`);

function kullanıcıTanıt() {
  let kullanıcı = "Kadir Berke";
  document.write(`Kullanıcı Adı: ${kullanıcı} <br/>`);
  document.write(`Kullanıcı Adı-1: ${kullanıcıİsimi} <br/>"`);
}
kullanıcıTanıt();
// document.write(`Kullanıcı Adı: ${kullanıcı} <br/>`);

// Not: Globale her yerde erişebiliriz local sadece belirli bir scope içinde yazılır

function kullanıcıİsim() {
  let kİsim = "Selda Evren";
  return kİsim;
}

// console.log(kullanıcıİsim());
document.write("-----------------------------------" + "<br/>");

// ? Hazır fonksiyonlara tekradan değinmişken arrowFunction larada değinelim

// * Arrow Function
// const fonksiyonAdo = () => {};
const toplamaİşlemi = (a, b) => a + b;
// console.log(toplamaİşlemi(44, 98));
let sonuç = toplamaİşlemi(12, 35);
// console.log(sonuç);

const kişiTanıt = (isim) => {
  document.write(`Aktif Kullanıcı: ${isim} <br/>`);
};
kişiTanıt("Ali Göktaş");
document.write("-----------------------------------" + "<br/>");

// * Javascript Objeler

//

const person = {
  name: "Yusuf",
  surname: "YAMAN",
  age: 22,
  nationality: "Türkiye",
  counter: 0,
  //   increase:function(){
  //           this.counter++
  //   }
};
// Object.values nesnenin tüm değerlerini alarak bir dizi oluşturur
let personArray = Object.values(person);

document.write(`Kişi Dizisi: ${personArray} <br/>`);
document.write(`Kişi Dizisi: ${person.name} <br/>`);
// Object.defineProperty ==> Objeye bir özellik katmak için kullanılır
Object.defineProperty(person, "increase", {
  get: function () {
    this.counter++;
  },
});
document.write(`Kişi Dizisi: ${person.counter} <br/>`);
person.increase;
document.write(`Kişi Dizisi: ${person.counter} <br/>`);
// Object.defineProperty(person, "name", { writable: false });
// Yukarıda bir objenin elemanın değiştirişmesini engelledik
person.name = "Selda";
document.write(`Kişi Dizisi ad: ${person.name} <br/>`);

Object.defineProperty(person, "school", {
  get: function () {
    return "Udemig";
  },
});
document.write(`Okul: ${person.school} <br/>`);

function OzelKişi(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

const newPerson = new OzelKişi("Yusuf", "YAMAN", 22);
document.write(`Özel kişi ad: ${newPerson.name} <br/>`);
document.write(`Özel kişi soyad: ${newPerson.surname} <br/>`);
document.write(`Özel kişi yaş: ${newPerson.age} <br/>`);

newPerson.nationality = "Turkish";
document.write(`Özel kişi milliyet: ${newPerson.nationality} <br/>`);
document.write("-----------------------------------" + "<br/>");

// * Javascript Obje içerisinde miras alma

const person1 = {
  callPerson: function (country, number) {
    document.write(
      `Ad: ${this.name} ${this.surname} ${country} ${number} <br/>`
    );
  },
};
const person2 = {
  name: "Yusuf",
  surname: "YAMAN",
};
// call ve apply yöntemi bir dışarıdan gelen değerlere bağlı olarak fonksiyonlar çalıştırır.Tek fark  call dışarıdan alacağı değerleri tek tek alır apply ise bunları dizi şeklinde alır.
person1.callPerson.call(person2, "Türkiye", 44);
const person3 = {
  name: "Hatice ",
  surname: "Bülbül",
};

person1.callPerson.apply(person3, ["İsveç", 30]);

// * Javascript Module Yapısı

// Scss de gördüğümüz modüler dosya kullanımını Javascriptde de kullanabiliyoruz.Bunun için export-import yapısı kullanılır.Ana js dosyası haricindeki dosyalarda oluşturulan yapıları dışarıya çıkarmak için export ederiz.Sonrasında bunu kullanmak istediğimiz dosyada import ederiz.Önemli kısım ise şu bir projede birden fazla js dosyası olduğundan bunlardan hangisinin ana javascript dosyası oluduğunu belirtmemiz gerekir.Bunu ise html de script etiketine type='module' ekleyerek yaparız.

console.log(data);

kişiTanıtım();

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((res) => console.log(res));

fetchUser();
