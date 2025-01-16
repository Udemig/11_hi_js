/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin farklı tiplerde değerler alabilceğini ifade etmemizi sağlayan yötenm.
  
 * Örn: Bir şehir değişkeni var ama şehir ismi mi (string) yoksa plakası mı (number) mı olucak kesin belli değil. Bu tarz durumlarda değişkenin tipni hem string hemde number olabilceğini söylemek isteriz  
*/

let city: string | number;

city = "İstanbul";
city = 34;

// Örn: Bir telefon verisi tutucaz ama kullanıcının telefonu ios'mu android'mi belli değil.
// Bundan dolayı iki farklı tip oluşturup tipini unionTypes ile tanımlayacapız

type IOS = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: IOS | Android;

phone = {
  ios_version: 13.0,
  airdrop_version: 2.5,
  device: "Iphone 16",
};

phone = {
  android_version: "Marsmellow",
  google_play_version: 4.5,
  device: "Xiaomi Mi 6",
};

// Union Types - Nensler ile kullanım
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// example değişekeninin tipini AType veya BType diyelim
let example: AType | BType;

// hata vermemesi için :
// ya AType'da ifade edilen bütün değerler tanımlanmalı
example = { key1: "x", key2: "x" };

// ya BType'da ifade edilen bütün değerler tanımlanmalı
example = { key3: 34, key4: 35 };

// yada hem AType hemde BType daki bütün değerleri tanımlayabiliriz (en az 1 tipin bütün değerleri)
example = { key1: "x", key2: "x", key3: 35 };
example = { key1: "x", key2: "x", key3: 35, key4: 35 };
