import { personIcon } from "./constants.js";
import getIcon from "./helpers.js";
import ui from "./ui.js";

//* Global Değişkenler
// Haritadaki tıklanan son konum
let clickedCoords;
let layer;
let notes = JSON.parse(localStorage.getItem("notes")) || [];

/*
 * Kullanıcıya konumun paylaşmak istedğini sorucaz:
 * 1) Paylaşırsa haritayı kullanıcnın konumuna göre ayarlıycaz.
 * 2) Paylaşmazsa haritayı ankara'ya ayarlıyacaz.
 */
window.navigator.geolocation.getCurrentPosition(
  (e) => {
    loadMap([e.coords.latitude, e.coords.longitude], "Mevcut Konum");
  },
  () => {
    loadMap([39.925696, 32.855806], "Varsayılan Konum");
  }
);

//* Haritayı yükler:
function loadMap(currentPosition, msg) {
  // 1) Harita Kurulum / Merkez Belirleme
  let map = L.map("map").setView(currentPosition, 8);

  // 2) Haritayı ekrana basar
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 10,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // haritanın üzerine imleçleri ekleyeceğimiz bir katman oluştur
  layer = L.layerGroup().addTo(map);

  // 3) İmleç ekle
  L.marker(currentPosition, { icon: personIcon })
    .addTo(map)
    .bindPopup(msg);

  //4) Haritada tıklanma olaylarını izle
  map.on("click", onMapClick);

  //5) Ekrana daha önce eklenen notları bas
  renderNotes();
  renderMakers();
}

//* Haritaya Tıklanma olayında:
function onMapClick(e) {
  // tıklanna konumun kordinatlarını global değişkene aktar
  clickedCoords = [e.latlng.lat, e.latlng.lng];

  // aside elementine add class'ını ekle
  ui.aside.className = "add";
}

//* İptal butonuna tıklanınca:
ui.cancelBtn.addEventListener("click", () => {
  // aside elementinden add class'ını kaldır
  ui.aside.className = "";
});

//* Form gönderilince:
ui.form.addEventListener("submit", (e) => {
  // sayfa yenilenmesini engelle
  e.preventDefault();

  // inputlardaki verilere eriş
  const title = e.target[0].value;
  const date = e.target[1].value;
  const status = e.target[2].value;

  // yeni bir nesne oluştur
  const newNote = {
    id: new Date().getTime(),
    title,
    date,
    status,
    coords: clickedCoords,
  };

  // nesneyi global değişkene kaydet
  notes.unshift(newNote);

  // localstorage'ı güncelle
  localStorage.setItem("notes", JSON.stringify(notes));

  // aside alanından "add" classını kaldır
  ui.aside.className = "";

  // formu temizle
  e.target.reset();

  // yeni notun ekrana gelmesi için notları tekrardan rendler
  renderNotes();
  renderMakers();
});

//* Ekrana notları bas:
function renderNotes() {
  const noteCards = notes
    .map(
      (item) => `
        <li data-id="${item.id}">
            <div>
              <p>${item.title}</p>
              <p>${new Date(item.date).toLocaleString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}</p>
              <p>${item.status}</p>
            </div>

            <div class="icons">
              <i class="bi bi-airplane-fill" id="fly"></i>
              <i class="bi bi-trash3-fill" id="delete"></i>
            </div>
          </li>
  `
    )
    .join("");

  ui.list.innerHTML = noteCards;
}

//* Ekrana imleçleri bas:
function renderMakers() {
  // eski imleçleri kaldır (katmandaki markerları temizle)
  layer.clearLayers();

  notes.forEach((item) => {
    // item'ın status'üne bağlı iconu belirle
    const icon = getIcon(item.status);

    L.marker(item.coords, { icon }) // imleci oluştur
      .addTo(layer) // imleçler katmanına ekle
      .bindPopup(item.title); // imlece bir popup ekle
  });
}
