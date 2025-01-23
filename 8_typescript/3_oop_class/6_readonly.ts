/*
 * Readonly - Saltokunur
 * Typescript'de bir sınıfın veya nesnenin içerisindeki bir özelliğin sadece okunabilir olmasını sağlar
 
 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıfılarda sadece constructor ile yapılabilir.
 * * Nesnelerde sadece değişkeni tanımlarken yapıllır. 
*/

// Nesnelerdeki Kullanımı
type Person = {
  name: string;
  surname: string;
  readonly tc_no: number;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Kaya",
  tc_no: 1231231234380,
};

kisi.name = "Mehmet";
kisi.surname = "Demir";
// kisi.tc_no = 1243583952348; //! readonly olduğu için değiştirilemez

// Classlardaki Kullanımı
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string = "Orhan Pamuk"; // değer atamasını doğrudan

  constructor(isim: string, sayfa: number, yazar: string) {
    this.isim = isim;
    this.sayfa = sayfa;
    this.yazar = yazar; // constructor'ından değer ataması
  }

  x() {
    // kitap.yazar = "x"; //! readonly olduğu için değiştirilemez
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");

// kitap.yazar = "x"; //! readonly olduğu için değiştirilemez

/*
 * CHALLANGE
 * Bir class tanımlayın ve class'tan örnek oluşturun.
 * Class en az 4 özelliğe sahip olsun.
 * En az 1 özelliği readonly olsun.
 * Özellikleri tanımlarken erişm belirteçlerini efektif bir şekilde kullanın.
 */

/*
class Sirket{
    Public isim: string;
    Protected calısan: number;
    Public readonly kurulustarihi: number
     
    Consructor (isim:string , calısan:number , kurulustarihi:number){
    This.isim : isim;
    This.calısan: calısan;
    This.kurulustarihi: kurulustarihi
     
    x(){
    sirket.kurulustarihi = “x” ; readonly o.i değiştirelemez
*/

class Instagram {
  public kullanıcıİsmi: string;
  protected kullaniciYasi: number;
  public readonly email: string = "abc@gmail.com";
  private sifre: string;

  constructor(
    kullanıcıİsmi: string,
    kullaniciYasi: number,
    email: string,
    sifre: string
  ) {
    this.kullanıcıİsmi = kullanıcıİsmi;
    this.kullaniciYasi = kullaniciYasi;
    this.email = email;
    this.sifre = sifre;
  }
}
const insta = new Instagram("hatice", 32, "abc@gmail.com", "12hatice");

// CEVAP
class GYM {
  public isim: string;
  private konum: string;
  protected kapasite: number;
  public readonly havuzvarmi: boolean;

  constructor(
    isim: string,
    konum: string,
    kapasite: number,
    havuzvarmi: boolean
  ) {
    this.isim = isim;
    this.konum = konum;
    this.kapasite = kapasite;
    this.havuzvarmi = havuzvarmi;
  }
}

const gym = new GYM("Fitplus", "Mağusa", 100, true);

// CEVAP
class Car {
  public brand: string;
  readonly model: string;
  public colors: string[];
  protected serialNo: number;
  private chassisNumber: number;

  constructor(
    brand: string,
    model: string,
    colors: string[],
    serialNo: number,
    chassisNumber: number
  ) {
    this.brand = brand;
    this.model = model;
    this.colors = colors;
    this.serialNo = serialNo;
    this.chassisNumber = chassisNumber;
  }
}
const vehicle = new Car(
  "Nissan",
  "Silvia S15",
  ["Aspen White", "Super Black"],
  2121,
  4234325234
);
console.log(vehicle.model);

// CEVAP- 1
class Besiktas {
  private readonly takimAdi: string;
  protected oyuncular: string[];
  public puan: number;
  private sampiyon: boolean;

  constructor(oyuncular: string[], puan: number) {
    this.takimAdi = "Beşiktaş";
    this.oyuncular = oyuncular;
    this.puan = puan;
    this.sampiyon = false; // Gonlumuzde herzaman
  }
}

// CEVAP - 2
class ZaraTisort {
  public tişörtAdı: string;
  protected beden: string;
  public readonly renk: string = "Beyaz";
  private fiyat: number;

  constructor(tişörtAdı: string, beden: string, renk: string, fiyat: number) {
    this.tişörtAdı = tişörtAdı;
    this.beden = beden;
    this.renk = renk;
    this.fiyat = fiyat;
  }
}

const zaraTisort = new ZaraTisort("Basic Tişört", "M", "Beyaz", 1199.99);
