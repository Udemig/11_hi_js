// * Javascript günümüzde kullanılan en popüler programlama dilidir.Bu popülerliğin en temel sebebi tek bir programlama diliyle hem frontend hem backend hemde mobile geliştirme yapabilmemizdir. Bir diğer sebeb ise geniş bir framework desteği sunmasıdır.

/*
* Javascript Çıktı Metotları: Javascript de kullanıcıya çıktı vermek için kullanılan 3 metot vardır.


? 1-) alert: Bu çıktı metodu ile kullanıcıya açılan bir popup ile uyarı verilir.

? 2-) console.log: Tarayıcıdaki console kısımında çıktı vermek için kullanılır.console tarayıcıda sağ tık > incele kısımı açılınca çıkan bir yapıdır.Bu kısım gerek bağlantı kontrolünün gerekse dışarıdan alınan verilerin incelenmesi noktasında tercih edilir.

? 3-) document.write: Html de tarayıcıdaki beyaz alanın body etiketine karşılık geldiğini söylemiştik.body kısımının Javascrip'deki karşılığıysa 'document' tir.Biz bu kısıma bir şey yazdırmak istersek 'write' metodu ile bunu yapabiliriz.

*/
// alert("Merhaba,Udemig Akademi Js dersinden selamlar !!!");

// console.log("Udemig Akademiden Selam");

document.write("Hello World !!!" + "<br/>");
// ! Programlamada + işaretinin iki kullanımı vardır.Birincisi sağında ve solunda bulunan sayıları toplaması ikincisi ise metin ifadeleri birleştirmesi.
document.write("Javascript Ders-1" + "<br/>");

/* 
* Javascript Değişkenler (Variables):


* Javascript'te değişkenler veri saklamak için kullanılan isimlendirilmiş depolama alanlarıdır.Bir değişken  bir değeri tutabilir ve bu değer programın akışı içinde değişebilir.

* Javascript Değişken Tanımlama:

* Değişken tanımlanırken en baş var,let ve const anahtar kelimesinden biri seçilir.Sonrasında bir boşluk bırakılır ve bu değişkene bir isim verilir.Bu isim değişkenin değeri ile bağıntılı olmalıdır.Değişkene verilen isimden  sonra bir boşluk daha bırakılır ve '=' işareti konulur.Bu işaretin sağına ise bu değişenin değeri yazılır.


! Değişken isimleri harf,(_), veya ($) işareti ile başlayabilir.Fakat sayı ile başlayamaz.Değişken isimleri büyük-küçük harf e duyarlıdır.Birden fazla kelimeden oluşan bir değişken adı varsa bu ad 'camelCase' e uygun adlandırılmalıdır.Yani ilk kelime tamamen küçük harf bundan sonra gelen tüm kelimelerin ise sadece ilk harfi büyük olacak şekilde yazılır.

? Neden değişken tanımlarken üç anahtar kelime kullanılıyoruz ?

* var daha eski projelerde kullanılan bir anahtar kelimedir.Güncel projelerde daha çok let yada const kullanılır.Bunun sebebi var ile oluşturulan bir değişkenin yeniden tanımlanabilmesidir.Bu sebepten var kullanımı tercih edilmez.


? let ve const arasındaki fark nedir ?

* let ve const arasındaki en önemli fark let ile tanımlanan bir değişkenin değeri sonrasında değiştirilebilir.Fakat const ile tanımlanan değişkenin değeri değiştirilemez.

*/

var kursAdı = "Udemig";
// var kursAdı = 335;

let isim = "Yusuf";
// isim = "YAMAN";
// let isim = "MEHMET"; bu kullanımdan syntax hatası verir

var soyisim = "YAMAN";
const yaş = 22;
// yaş = 32;
// const yaş = 2345; bu kullanımdan syntax hatası verir

document.write(kursAdı + "<br/>");
document.write(isim + "<br/>");
document.write(soyisim + "<br/>");
document.write(yaş + "<br/>");

// ? Değişken tanımlarken neden sayı ve metin ifadeleri farklı şekilde tanımladık ?

// * Javascript de metin ifaedeler 'string' olarak geçer.String ifaedelerin sayılardan ayırt edilmesi için tanımlanırken " " arasında yazılır.Sayılar Javascript de 'number' olarak geçer. Sayılar ise direkt olarak yazılır."" işaretine gerek duyulmaz.

let sınıfAdı = "11 Haftaiçi Frontend";
const mevcut = 28;

// !  Verilerin tipini sorgulamak için 'typeof' metodu kullanılır.
console.log(typeof sınıfAdı);
console.log(typeof mevcut);
console.log(typeof "Yusuf YAMAN");
console.log(typeof 44);

// + işareti sağında solunda sayılar varsa bunları toplar metin varsa bunları birleştirir demiştik. Yanyana metin ve sayı ifadelerinin kullanımına bakalım

document.write(sınıfAdı + " sınıfında " + mevcut + " kişiyiz." + "<br/>");
document.write(mevcut + 44 + "<br/>");
