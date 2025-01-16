/*
 * Enum (Numaralandırma)
 * Belirli Değerler Kümesi
  
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır.

 * Genelde az miktarda farklı değere sahip veirlerin gruplandırılması için kullanılır.

  * İsimlendirme:
  * İlk harfi büyük olur
  * Çoğul takısı kullanmayız
  * Colors X | Color
*/
// Örn trafik ışığının aşamalarının verisini tutalım
// Klasik js nesnesi ile
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// Typescipt enum ile
var Color;
(function (Color) {
    Color["red"] = "K\u0131rm\u0131z\u0131";
    Color["yellow"] = "Sar\u0131";
    Color["green"] = "Ye\u015Fil";
})(Color || (Color = {}));
console.log(Color.red);
console.log(Color.yellow);
console.log(Color.green);
// bir nesne yerine enum tercih etme sebebimiz enumu bir veri tipi olarak kullanabiliyor olmamaız
var speak = function (light) {
    console.log("Şuan " + light + " ışık yanıyor..");
};
// bu fonksiyonu kullanırken parametre olarak enumdaki değişkenlerin dışarısında bir değer gönderemiyoruz
speak(Color.yellow);
// Örnek - 2
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
console.log(Gun.Carsamba); // 2
console.log(Gun[4]); // Cuma
console.log(Gun[Gun.Pazar]); // Pazar
// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara arayüzde sıklıkla kargo durmunu yazmamız gerekiyor. Bu durumda kargo durumlarını js'te bir nesneye aktarırdıl ts'de ise bunu enum ile hallderiz sebebi enum'ı tip olarak kullanıbiliyor olmamız
var Status;
(function (Status) {
    Status["set"] = "Haz\u0131rlan\u0131yor";
    Status["travel"] = "Da\u011F\u0131t\u0131ma \u00C7\u0131kt\u0131";
    Status["done"] = "Teslim Edildi";
})(Status || (Status = {}));
console.log(Status.set);
console.log(Status.travel);
console.log(Status.done);
