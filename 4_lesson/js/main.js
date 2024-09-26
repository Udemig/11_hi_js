// console.log(`Selam Javascript`);

// * Javascript setTimeout // setInterval

// bu iki yapı zamana bağlı işlemler yapmak için kullanılır.

// * setTimeout ==> Belirli bir süre sonrasında bir işi gerçeklerşitirmek için kullanılır.

// setTimeout(() => {
//   document.write(`setTimeout çalıştı !! <br/>`);
// }, 2000);

// * setInterval ==> Belirli bir aralıkta bir işlem yapmak için kullanılır.

// setInterval(() => {
//   document.write(`setInterval çalıştı !! <br/>`);
// }, 2000);

// ! setTimeout bir alarm kurmak gibidir.10 dk sonra beni kaldır.

// ! setInterval belirlenen zaman aralığında bir işi sürekli yapmak için kullanılır.

// * Javascript Promises Yapısı

// Javascript de promises yapısı asekron işlemler için kullanılır.

// ? Promises Nedir ?

// Promises Javascript de asekron işlemleri yönetir.Bir işlemin ne kadar zaman alacağı bilinmediği nokta bu yapı kullanılır.

// Promises iki şekilde sonuçlanır.

// 1-) Resolve: İşlem başarıyla sonuçlanır.

// 2-) Reject: İşlem başarısız olur.

const işlem1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.write(`İşlem 1 yapılıyor .... <br/>`);
      const hataVar = false;
      if (hataVar) {
        reject(`İşlem 1 sırasında bir hata oluştu`);
      } else {
        resolve(`İşlem 1 tamamlandı !`);
      }
    }, 2000);
  });
};

// işlem1()
//   .then((message) => {
//     setTimeout(() => {
//       document.write(`${message} <br/>`);
//     }, 1000);
//   })
//   .catch((error) => {
//     document.write(`${error} <br/>`);
//   });

// ! Promises yapısı bir pizza siparişi sürecine benzetilebilir.Eğer pizza teslim edildiyse size 'pizza teslim edild!' edilediyse 'pizza teslim edilemedi !' şeklinde mesaj gelecektir.Burada pizza teslimine bağlı olarak işlemler gerçekleşir.

// * Async / await

// * Aync-await yapısı Javascript de asekron işlemleri yazmak için kullanılır.

// Fonksiyonlar eğer biz aksini belirtmezsek içerisindeki tüm kodları aynı anda çalıştırır.Bundan dolayı bizim eğer birbiri ile aynı anda çalışmayacak yapılarımız varsa yani asekron işleme sahipsek bunu fonksiyona bildirmemiz gerekir.Bir fonksiyonu asekron yapıda çalıştırmak için fonksiyonun başına async bunun içerisinde kendisinden sonra bir işlem yapacak kısıma ise await demeliyiz.Bu sayede artık fonksiton belirten yapı çalışmadan diğerlerine geçmeyecektir.

const veriAl = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Veri başarıyla alındı !`);
    }, 2000);
  });
};

const veriYazdır = async () => {
  document.write(`Veri alınıyor !!`);
  const veri = await veriAl();
  console.log(veri);
};
// veriYazdır();

// * Javascript Class Yapısı

class Araba {
  //  constructor bir classın kurucu metodur
  constructor(marka, model, yıl) {
    this.marka = marka;
    this.model = model;
    this.yıl = yıl;
  }
  tanıt() {
    return `Araba: ${this.marka} ${this.model} ${this.yıl}`;
  }
}
// Classın bir örneğin al
const araba1 = new Araba("Toyata", "Corolla", 2024);

// console.log(araba1);
// console.log(araba1.tanıt());

class ElektirikliAraba extends Araba {
  constructor(marka, model, yıl, batarya) {
    super(marka, model, yıl);
    this.batarya = batarya;
  }
  newAraba() {
    return ` ${this.batarya}`;
  }
}

// todo: İnsan adında bir class oluşturunuz.Bu class dışarıdan isim,soyisim,yaş şeklinde değerler alsın.Bu classın içerisinde yer alan öğrencibilgileri adındaki fonk. çalışınca bu değerleri döndürsün.

class Insan {
  constructor(isim, soyisim, yaş) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yaş = yaş;
  }
  öğrencibilgileri() {
    return ` İnsan: ${this.isim} ${this.soyisim} ${this.yaş}`;
  }
}

const kişi = new Insan("Neval", "Durmaz", 30);

// console.log(kişi);
// console.log(kişi.öğrencibilgileri());

const tesla = new ElektirikliAraba("Tesla", "Model 3", 2020, 75);
// console.log(tesla);

/*
* constructor ==> Bu yapı kurucu metotdur.
* this ==> Bu yapı yapı içerisindeki özelliklere erişmek için kullanılır.
* extends ==> Miras almak için kullanılır.
* super ==> Miras alınan yapıların kurucu metodudur.

*/

// * Fetch Metodu

// Javascript içerisinde yer alan bu metot api dan veri almak için kullanılır.

const fetchUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  //   console.log(data);
  return data;
};
// fetchData();

// todo: jsonPlaceholder api dan posts verileri alıp console a  yazdırınız

const fetcPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const post = await response.json();
  console.log(post);
};
// fetcPosts();

// Apı dan alınan verileri renderUser fonk. ile ekrana bas

const renderUser = async () => {
  const user = await fetchUser();
  console.log(user);
  user.forEach((user) => {
    document.write(`Kullanıcı Adı: ${user.name} <br/>`);
  });
};
// renderUser();

// * DOM (DOCUMENT OBJECT MODAL)

// * Javascript çıktı metotlarında Html deki body kısımının Javascript de document e karşılık geldiğini ve bu kısıma document.write() çıktı verebildiğimiz söyledik.Bu kısıma sadece çıktı vermekle kalmayıp buradaki elemanları manipüle edebiliriz.

// * Bir elemanı manipile etmek için önce bu elemana erişmemiz gerekir.Bunun için Javascript de yer alan birkaç metot vardır.

// * 1-) Html de yer alan eleman Tag adına göre erişme
// Html deki bir elemana tag adı ile erişmek için 'document.getElementsByTagName()' metodu kullanılır.Bu metot () içerisinde hangi elemana erişilecekse bunun adını ister.
const başlık = document.getElementsByTagName("h1");
// console.log(başlık);

// * 2-) Html de yer alan eleman Class ına  göre erişme
// Html deki bir elemana class ile erişmek için 'document.getElementsByClassName()' metodu kullanılır.Bu metot () içerisinde hangi elemana erişilecekse bunun class ını  ister.
const başlık1 = document.getElementsByClassName("başlık");
// console.log(başlık1);

// * 3-) Html de yer alan eleman İd sine göre erişme
// Html deki bir elemana id ile erişmek için 'document.getElementById()' metodu kullanılır.Bu metot () içerisinde hangi elemana erişilecekse bunun id sini  ister.
const başlık2 = document.getElementById("başlık1");
// console.log(başlık2);

// * 4-) Html deki elemanlara belirtilen özellik ile erişme
// Yukarıdaki metotlar ile erişilen elemanların hepsine 'document.querySelector()' metodu ile erişebiliriz.Bu metot da eleman id ile erişilecekse bunu () içerisinde '#idAdı'; class ile erişilecekse () '.classAdı' ; tag adı ile erişilecekse () 'tagAdı' ile erişiriz.

const paragraf = document.querySelector(".paragraf");
// console.log(paragraf);

const paragraf1 = document.querySelector("#paragraf1");
// console.log(paragraf1);

// ! Buradaki önemli kısım elemanlara  getElementsByClassName ve getElementById değerlerine göre erişmeye çalışırken () içerisinde bu özelliğin class mı id mi olduğunu belirtmeme gerek yok.Ama querySelector kullanırken bu özelliğin id yada class olduğunu belirtmem gerekir

// ? Html den erişilen bu elemanları nasıl manipüle ederim ?

// * 1-) Stil özellikleri
// paragraf.style.backgroundColor = "red";
// paragraf.style.color = "yellow";
// paragraf.style.padding = "20px";
// paragraf.style.fontSize = "40px";

// ! Yukarıda görüldüğü üzere Javascript de Html elemanlarına stil özelliği verebiliriz.Fakat bu özellikleri verirken yazım olarak bir tık zorluk yaşarız.Bundan dolayı bu özellikleri css de yazıp istenilen elemana ekleyip çıkarabiliriz.
// Css de oluşturulan class bu elemana eklendi
paragraf.classList.add("text"); // Class ekledik
// paragraf.classList.remove("text"); // Classı kaldırdık
// console.log(paragraf.classList.contains("text")); Class var mı bunu kontrol ettik

// * Javascript de bir elemana class eklerken classList özelliği kullanılır.Bu özellik add(classı ekler) // remove( classı çıkarır ) // toggle (belirtilen class varsa bunu çıkarır yoksa bu classı ekler)

const changeClass = document.querySelector(".add-class");
changeClass.addEventListener("click", () => {
  paragraf.classList.toggle("text");
});
const udemigText = document.querySelector(".udemig");
const EmaartechText = document.querySelector("#emaartech");

// console.log(udemigText, EmaartechText);

// * innerHtml ==> Bir elementin hem metin hem Html kısımına müdahale etmek için  kullanılır.

// * innerText ==> Bir elemanın içeriğini günceller.

// * textContent ==> Bir elemanın içeriğini günceller.

// udemigText.innerHTML = `<button>Udemig Buton</button>`;

// EmaartechText.innerText = `Yusuf YAMAN`;
// paragraf.textContent = "Merhaba Javascript";

// * Olay İzleyicileri (addEventListeners)

const uyarıButton = document.querySelector("#uyarı-btn");

uyarıButton.addEventListener("click", () => {
  alert("Butona tıklandı !!");
});

/*
onclick ==> tıklanıldığında

onsubmit ==> gönderildiğinde

onload ==> yüklendiğinde

onmouseenter ==> mouse geldiğinde

onmouseleave ==> gittiğinde

onfocus ==> 


*/

// Olay izleyicileri bir elamana bir olaya bağlı olarak işlevler katmak için kullanılır.Bunun için bizden iki değer ister.Birincisi hangi olayı izleyecek ikincisi bu olay gerçekleşince hangi yapı çalışacak.

// todo: Bir butona tıklanınca Html kısımındaki herhangi bir elemana class ekleyip çıkarın.

const changeColorButton = document.querySelector("#change-color");

const wrapper = document.querySelector(".wrapper");

// console.log(changeColorButton, wrapper);
changeColorButton.addEventListener("click", () => {
  wrapper.classList.toggle("red");
});

// todo: Bir butona tıklanınca light/dark mode özelliğini çalıştırınız

const changeThema = document.querySelector(".change-thema");
// console.log(changeThema);

changeThema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// * Javascript de Html için eleman ekleme-çıkarma

// * Eleman Ekleme

// Bu işlem için iki metot kullanılır.Birincisi cretaeElement ikincisi appendChild . cretaeElement metodu bir Html elemanı oluşturmak için kullanılır.appendChild ise bu oluşturulan elemanın hangi eleman içerisinde olanağını belirler.Daha önce gördüğümüz innerText yada textContent özelliği ile bu oluşturulan elemanın içeriğini belirleriz.

// * Eleman Çıkarma

// Bu işlem için removeChild yada remove metodu kullanılır.Her ikisi aynı işlevi yapar remove daha modern olanıdır.

const container = document.querySelector(".container");

const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove");

// console.log(container, addButton, removeButton);

const addDiv = () => {
  // Html kısımı için  bir eleman  oluşturduk
  let newDiv = document.createElement("div");
  // Bu elemanın içeriğini belirledik
  newDiv.innerText = "Yeni  Div";
  // Bu elemana class ekle
  newDiv.classList.add("center-text");
  // Bu elemanın Html de yer alan bir kapsayıcı içerine ekledik
  container.appendChild(newDiv);
};

addButton.addEventListener("click", addDiv);
const removeDiv = () => {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
};

removeButton.addEventListener("click", removeDiv);

// Form

const form = document.querySelector(".form");

sendForm = (e) => {
  // Form gönderildiğinde sayfa yenilenir.Bundan dolayı formun içerisindeki fonksiyonlar ve değerlere erişilemez.
  e.preventDefault();
  //   console.log(`Form Gönderildi`);
  console.log(e);
  let name = e.target[0].value;
  let surname = e.target[1].value;
  console.log(name, surname);
};

form.addEventListener("submit", sendForm);
