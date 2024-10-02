//! arayüzü etki edicek bütün fonksiyonlar bu dosyada...

// menu list divini çağır
const menuList = document.getElementById("menu-list");

// menü elemanlarını param. olarak alıp dizideki her bir eleman için ekrana kart bas
export const renderCards = (data) => {
  // data dizisindeki herbir nesne için kart html'i oluştur
  // join methodu ike diziyi stringe çevirdik
  const cardsHTML = data
    .map(
      (item) => `
      <a
        href="/detail.html?id=${item.id}"
        id="card"
        class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none"
      >
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(
              2
            )}₺</p>
          </div>

          <p class="lead">
          ${item.desc}
          </p>
        </div>
      </a>  
  `
    )
    .join("");

  // oluşturuğumuz kartları #menuList divinin içine aktar
  menuList.innerHTML = cardsHTML;
};
