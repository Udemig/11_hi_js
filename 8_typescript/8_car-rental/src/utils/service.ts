import { ICar } from "../types";

type FetchCarsReturn = {
  total_count: number;
  results: ICar[];
};

type Filter = {
  make?: string;
  model?: string;
  year?: string;
  page?: string;
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return etitiği veriyi yazdığımız hata alırız. Fonksiyonların hata döndrüdem ihtimalinde göze alarak ts'in içerisinde nulunan Promise tipine kendi tipimizi generic olarak göndermeliyiz
export const fetchCars = async ({
  make = "BMW",
  model,
  year,
  page = "1",
}: Filter): Promise<FetchCarsReturn> => {
  const url = new URL(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records"
  );

  // page (kaçıncı sayfa olduğu state'i) 1     2    3     4
  // limit (kaç tane eleman alınacak)    10    10   10    10
  // offset (kaç tane eleman atlanıcak)  0     10   20    30

  // sayfa başına gösterilcek eleman sayısı
  const limit = 10;

  url.searchParams.append("limit", String(limit));
  url.searchParams.append("offset", String((Number(page) - 1) * limit));

  url.searchParams.append("refine", `make:"${make}"`);

  if (model) {
    url.searchParams.append("refine", `model:"${model}"`);
  }

  if (year) {
    url.searchParams.append("refine", `year:"${year}"`);
  }

  const res = await fetch(url.href);

  const data = await res.json();

  return data;
};
