/*
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array
 * object
 * tuple
 * union types
 * string literal
 * any
 * tiplerine sahipt bir custom type olarak nesne tipi oluşturun
 * ve oluşturduğunuz tipi bir nesneye verip değerlerini tanımlayın
 */

// Cevap - 1
type Ad = string;
type Yas = number;
type AktifMi = boolean;
type Konum = [number, number];

interface Kullanici {
  id: string;
  ad: Ad;
  yas: Yas;
  aktifMi: AktifMi;
  konum: Konum;
}

type Durum = "aktif" | "pasif";
type KullaniciListesi = Kullanici[];

// Cevap - 2
type Product = {
  name: string;
  price: number;
  instock: boolean;
  tags: string[];
  details: {
    weight: number;
    origin: string;
  };
};

const dubaiChocolate: Product = {
  name: "Dubai cikolatasi",
  price: 100,
  instock: true,
  tags: ["sweet", "gift"],
  details: {
    weight: 250,
    origin: "Antep",
  },
};

// Cevap - 3
type FootballPlayer = {
  name: string;
  footSize: number;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  havingTeam: boolean;
  previousTeam: [string, number][];
  contact: string | number;
};

const player1: FootballPlayer = {
  name: "Mauro Icardi",
  footSize: 44,
  position: "Forward",
  havingTeam: true,
  previousTeam: [
    ["PSG", 4],
    ["GS", 2],
  ],
  contact: "mauro@example.com",
};

// Cevap - 4
type Guitar = {
  modal: string;
  imza: string;
  tur: "classic" | "elektro";
  tel_sayisi: string;
  fiyat: number;
  stok: boolean;
};

const fender: Guitar = {
  modal: "1980",
  imza: "Pink Floyd",
  tur: "elektro",
  tel_sayisi: "6",
  fiyat: 120000,
  stok: true,
};

// cevap - 4
type bicycle = {
  make: string;
  model: string;
  type: "mountain" | "freeride" | "enduro";
  for_sale: boolean;
  price: number;
  details: {
    brake: string;
    frame: number;
  };
};

const daytona: bicycle = {
  make: "carraro",
  model: "daytona",
  type: "mountain",
  for_sale: true,
  price: 32999,
  details: {
    brake: "hydraulic disc brake",
    frame: 54,
  },
};
