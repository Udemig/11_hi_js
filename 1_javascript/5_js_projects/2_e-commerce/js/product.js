// Veriyi Apı dan alan fonksiyon
export const fetchProducts = async () => {
  try {
    // Api a istek at
    const response = await fetch("db.json");
    // console.log(response);
    // Hata durumunu kontrol et
    if (!response.ok) {
      // Hata varsa hata fırlat
      throw new Error("URL Yanlış");
    }
    // Hata yoksa veriyi return et
    return await response.json();
  } catch (error) {
    // Hata varsa  bunu console a yazdır
    console.error(error);
    return [];
  }
};
// Ürünleri render eden fonksiyon
export const renderProducts = (products, addToCartCallBack) => {
  // * Html de ürünlerin listeleneceği kısımı seç
  const productList = document.querySelector("#productList");
  // * Ürünleri ekrana bas
  // Html deki productsListin içeriğini dön
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="product">
           <img
            width="200"
            src="${product.image} "
            alt="product-img"
            class="product-img"
          />
           <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <button  class="add-to-cart" data-id='${product.id}'>Add to cart</button>
           </div>
       </div>
  `
    )
    .join("");

  // Add to cart butonlarını seç
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  // * Her bir  Add to cart butonuna tıklanma olayı ekleniyor
  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", addToCartCallBack);
  }
};
