export const sortOptions = [
  {
    label: "Seçiniz",
    value: "",
  },
  {
    label: "Artan fiyat",
    value: "price-asc",
  },
  {
    label: "Azalan fiyat",
    value: "price-desc",
  },

  {
    label: "Yüksek puanlılar",
    value: "rating-desc",
  },
  {
    label: "Düşük puanlılar",
    value: "rating-asc",
  },
];

export const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputs = [
  {
    label: "Başlık",
    name: "name",
    placeholder: "Seaside Villa",
  },
  {
    label: "Lokasyon",
    name: "location",
    placeholder: "Ankara, Türkiye",
  },
  {
    label: "Adres",
    name: "address",
    placeholder: "123 Beach Road",
  },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "Deniz manzaralı villa",
  },
  {
    label: "Olanaklar",
    name: "amenities",
    placeholder: "WiFi, Havuz, Klima",
  },
  {
    label: "Puan",
    name: "rating",
    placeholder: "4.5",
    type: "number",
  },
  {
    label: "Gecelik Fiyat",
    name: "price_per_night",
    placeholder: "150$",
    type: "number",
  },
  {
    label: "Uygunluk (Şuan müsait oda var mı ?)",
    name: "availability",
    placeholder: "",
    type: "checkbox",
  },
];
