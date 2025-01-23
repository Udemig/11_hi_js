/*
 * Interface type'larda olduğu gibi farklı bir/birkaç interface'in özelliklerini miras alabilir.
 * Miras alma extends anahtar kelimesi ile geçekleşir.
 * Sınıflardan farklı olarak istersek birden fazla interface'i tek seferde miras alabiliyoruz.
 */

// bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
}

// yeni bir interface oluşturup öncekinin tipini miras olarak alalım
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'i bir nesnenin tipini tanımlarken kullanalım
const masa: IMobilya = {
  isim: "Yemek Masası",
  fiyat: 2000,
  renk: "Siyah",
};

// farklı bir interface daha oluşturalım
interface IElektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birden fazla interface'i miras alma
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

// interface'i kullanalım
const tv: IUrun = {
  id: "34as",
  marka: "LG",
  isim: "Smart TV",
  garantiSuresi: 4,
  renk: "Beyaz",
  fiyat: 89000,
  şarj: 1000,
};

/*
 * Challange
 * İlk olarak 2 farklı interface oluşturun.
 * Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletin.
 * Son olarak bu interface'i 1 nesnenin tipini tanımlarken kullanın
 */

// CEVAP
interface IYatak {
  yatakBoyutu: string;
  malzeme: string;
}
interface IYorgan {
  yorganBoyutu: string;
  dolguMalzemesi: string;
}
interface IYatakYorganTakimi extends IYatak, IYorgan {
  takimRengi: string;
}
const takim: IYatakYorganTakimi = {
  yatakBoyutu: "Buyuk Boy",
  malzeme: "Ahşap",
  yorganBoyutu: "Çift Kişilik",
  dolguMalzemesi: "Bilmiyorum",
  takimRengi: "Beyaz",
};
console.log(takim);
console.log("Gozler kapandi bende !");

// CEVAP
interface Ibitki {
  tür: string;
  yetismeYeri: string;
}
interface Iflow {
  renk: string;
  fiyat: number;
}
interface Icicek extends Ibitki, Iflow {
  isim: string;
}

const orkide: Icicek = {
  tür: "cicek",
  yetismeYeri: "saksı",
  renk: "beyaz",
  fiyat: 500,
  isim: "orkide",
};

// CEVAP
interface Hayvan {
  isim: string;
  yas: number;
}

interface Evcil {
  sahip: string;
  cins: string;
}

interface Kedi extends Hayvan, Evcil {
  renk: string;
}

// Nesne tanımlaması
const benimKedim: Kedi = {
  isim: "Şerafettin",
  yas: 2,
  sahip: "Yagmur",
  cins: "Tekir",
  renk: "Sarı",
};

// CEVAP

interface Product {
  name: string;
  id: string;
  category: string;
}

interface books extends Product {
  yayinevi: string;
  author: string;
}

const Ürün: books = {
  name: "Veronika ölmek istiyor",
  id: "edfref4",
  category: "psikolojik dram",
  yayinevi: "can yayınları",
  author: "paulo coelho",
};

// cevap
interface SporDali {
  ad: string;
  oyuncuSayisi: number;
  takimTüru: string;
}

interface Ekipman {
  isim: string;
  malzeme: string;
  fiyat: number;
}

interface Futbol extends SporDali, Ekipman {
  takimAdı: string;
  ligSeviyesi: string;
}

const futbol: Futbol = {
  ad: "Futbol",
  oyuncuSayisi: 11,
  takimTüru: "Takım",
  isim: "Futbol Topu",
  malzeme: "Deri",
  fiyat: 8.0,
  takimAdı: "Fenerbahçe",
  ligSeviyesi: "Süper Lig",
};
