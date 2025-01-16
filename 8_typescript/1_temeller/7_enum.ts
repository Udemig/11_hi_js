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
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// Typescipt enum ile
enum Color {
  red = "Kırmızı",
  yellow = "Sarı",
  green = "Yeşil",
}

console.log(Color.red);
console.log(Color.yellow);
console.log(Color.green);

// bir nesne yerine enum tercih etme sebebimiz enumu bir veri tipi olarak kullanabiliyor olmamaız
const speak = (light: Color) => {
  console.log("Şuan " + light + " ışık yanıyor..");
};

// bu fonksiyonu kullanırken parametre olarak enumdaki değişkenlerin dışarısında bir değer gönderemiyoruz
speak(Color.yellow);

// Örnek - 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

console.log(Gun.Carsamba); // 2
console.log(Gun[4]); // Cuma
console.log(Gun[Gun.Pazar]); // Pazar

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılara arayüzde sıklıkla kargo durmunu yazmamız gerekiyor. Bu durumda kargo durumlarını js'te bir nesneye aktarırdıl ts'de ise bunu enum ile hallderiz sebebi enum'ı tip olarak kullanıbiliyor olmamız

enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log(Status.set);
console.log(Status.travel);
console.log(Status.done);

const updateStatus = (value: Status) => {
  console.log("Durum güncellendi");
};

updateStatus(Status.travel);

// Örnek - 4
enum Action {
  create = "CREATE",
  update = "UPDATE",
  delete = "DELETE",
}

const reducer = (state: any, action: Action) => {
  console.log(action + " çalıştırıldı");
};

reducer("state", Action.create);
