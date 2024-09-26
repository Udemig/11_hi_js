// Bağlantı Kontrolü
// console.log(`Selam js`);

import { addToCart, displayCartTotal, renderCartItems } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";
import { getFromLocalStorage, updateCartIcon } from "./utils.js";

// ! HTML 'den elemanları çekme
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon);
const menu = document.querySelector(".navbar");
// console.log(menu);
// Menu ıconuna tıklayınca Menu kısımına class ekleyip çıkar
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});
// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", async () => {
  const cart = getFromLocalStorage();
  // console.log(window);
  // Biz tarayıcıda ana sayfadamıyız cart sayfasında mı
  // Cart.html
  if (window.location.pathname.includes("cart.html")) {
    // console.log(`Cart Sayfası`);
    renderCartItems();
    displayCartTotal();
  }
  // index.html
  else {
    // console.log(`Ana Sayfa`);
    const product = await fetchProducts();
    // console.log(product);
    // Buradaki arrow function addToCartCallBack fonksiyonu oluyor.
    renderProducts(product, (event) => addToCart(event, product));
  }
  // Sepet İconunu Güncelle
  updateCartIcon(cart);
});
