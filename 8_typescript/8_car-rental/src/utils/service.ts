import { ICar } from "../types";

type FetchCarsReturn = {
  total_count: number;
  results: ICar[];
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return etitiği veriyi yazdığımız hata alırız. Fonksiyonların hata döndrüdem ihtimalinde göze alarak ts'in içerisinde nulunan Promise tipine kendi tipimizi generic olarak göndermeliyiz
export const fetchCars = async (): Promise<FetchCarsReturn> => {
  const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make:BMW`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
