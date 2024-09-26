import { renderCards } from "./scripts/ui.js";

//* data'ya heryerde erişebilmek için global değişken tanımıdı
let data;

//* menü verilerini json dosyasından çeken fonk.
async function fetchMenu() {
  //* api'dan verileri al
  const res = await fetch("./db.json");

  //* json verisini js formatına çevir
  data = await res.json();
}

//* sayfanın yüklenme olayını izle
window.addEventListener("DOMContentLoaded", () => {
  // verileri çeken foknsiyonu çalıştır
  fetchMenu()
    // başarılı olduğu zaman kartları ekrana basan fonk. çalış.
    .then(() => renderCards(data.menu));
});

//* buttons alanındaki inputları çağır
const inputs = document.querySelectorAll("#buttons input");

//* imputlar dizisini dön:
inputs.forEach((input) => {
  //* herbir inputun seçilme olayını izle:
  input.addEventListener("change", () => {
    // seçilen kategoriy, belirle
    const selected = input.id;

    // eğer hepsi seçiliyse bütün datayı ekrana bas
    if (selected === "all") {
      renderCards(data.menu);
    } else {
      // menü elemalarından seçilen kategoriye ait olanları filtrele
      const filtred = data.menu.filter((i) => i.category === selected);

      // filterenen datayı ekrana bas
      renderCards(filtred);
    }
  });
});
