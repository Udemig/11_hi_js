// Bağlantı Kontrolü
// console.log(`Selam js`);

import { fetchProducts } from "./product.js";

// ! HTML 'den elemanları çekme
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon);
const menu = document.querySelector(".navbar");
// console.log(menu);
// Menu ıconuna tıklayınca Menu kısımına class ekleyip çıkar
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

fetchProducts();
