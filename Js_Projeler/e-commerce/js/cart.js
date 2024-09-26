import {
  calculateCartTotal,
  getFromLocalStorage,
  saveToLocalStorage,
  updateCartIcon,
} from "./utils.js";

let cart = getFromLocalStorage();

// * Sepete Ekleme Yapacak Fonksiyon
export function addToCart(event, products) {
  // Tıklanılan ürünün id sine erişildi ve  productId değişkenine atandı
  const productId = parseInt(event.target.dataset.id);
  // Bu id ye sahip başka bir ürün var mı
  const product = products.find((product) => product.id === productId);
  //   console.log(product);
  // Eklenecek veri öncesinde sepette varsa  bunu yeni bir eleman olarak ekleme.
  if (product) {
    // Eğer ürün varsa bunu bul
    const exitingItem = cart.find((item) => item.id === productId);
    // Ürün sepette varsa bunu ekleme
    if (exitingItem) {
      exitingItem.quantity++;
    } else {
      // Eklenecek veriyi objeye çevir
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      cart.push(cartItem);
      // Ekleme yapılan cartın içeriğini güncelle
      event.target.textContent = "Added";
      // Sepet Iconunu Güncelleyen fonks.
      updateCartIcon(cart);
      // Localstorage a kayıt yapan fonksiyon
      saveToLocalStorage(cart);
      // Toplam Miktarı Hesapla
      displayCartTotal;
      // Sepet İconunu Güncelle
      updateCartIcon(cart);
    }
  }
}

// Sepetten Ürünleri Silecek Fonksiyon
const removeFromCart = (event) => {
  // Silinecek elemanın id sine eriştik
  const productID = parseInt(event.target.dataset.id);
  // Tıklanılan elemanı sepetten kaldır
  cart = cart.filter((item) => item.id !== productID);
  // Localestorage ı güncelle
  saveToLocalStorage(cart);
  // Sayfayı güncelle
  renderCartItems();
  // Toplam Miktarı Hesapla
  displayCartTotal();
  // Sepet İconunu Güncelle
  updateCartIcon(cart);
};

// Sepetteki elemanları render edecek fonksiyon
export const renderCartItems = () => {
  // Html de elemanların render edileceği kapsayıcıya eriş
  const cartItemsElement = document.querySelector("#cartItems");

  // Sepetteki herbir eleman için cart item render et
  cartItemsElement.innerHTML = cart
    .map(
      (item) =>
        `
        <div class="cart-item">
              <img
                src="${item.image}"
                alt=""
              />
              <!-- * Info Kısımı -->
              <div class="cart-item-info">
                <h2>${item.title} </h2>
                <input
                  type="number"
                  min="1"
                  value="${item.quantity}"
                  class="cart-item-quantity"
                  data-id='${item.id}'
                />
              </div>
              <h2 class="cart-item-price">$${item.price} </h2>
              <button class="remove-from-cart" data-id='${item.id}'>Remove</button>
            </div>
  `
    )
    .join("");

  // Remove butonlarına eriş
  const removeButtons = document.querySelectorAll(".remove-from-cart");
  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i];
    removeButton.addEventListener("click", removeFromCart);
  }

  // Quantity İnputlarına eriş
  const quantityInputs = document.getElementsByClassName(
    "cart-item-quantity"
  );

  // her bir inputun değişme olayını izle
  for (let i = 0; i < quantityInputs.length; i++) {
    const quantityInput = quantityInputs[i];
    quantityInput.addEventListener("change", onQuantityChange);
  }
};

//* Inputlar değiştiğinde çalışıcak olan fonksiyon
const onQuantityChange = (event) => {
  const newQuantity = +event.target.value;
  const productId = +event.target.dataset.id;

  // yeni miktar 0'dan büyükse:
  if (newQuantity > 0) {
    // id'si bilinen elemanın bilgilerini bul
    const cartItem = cart.find((item) => item.id === productId);

    // eğerki eleman sepette bulunamadıysa fonksiyonu durdur
    if (!cartItem) return;

    // ürünün miktarını güncelle
    cartItem.quantity = newQuantity;

    // localstorage'ı güncelle
    saveToLocalStorage(cart);

    // sepet ikonundaki değeri güncelle
    updateCartIcon(cart);

    // toplam fiyatı güncelle
    displayCartTotal();
  }
};

//* Toplam miktarı ekrana basar
export const displayCartTotal = () => {
  const cartTotalElement = document.querySelector("#cartTotal");
  const total = calculateCartTotal(cart);
  cartTotalElement.textContent = `Total: $${total.toFixed(2)} `;
};
