import { useState } from 'react';
import { createContext } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // sepete yeni ürün ekle zaten varsa miktarını arttır
  const addToBasket = (product) => {
    // sepete eklenemeye çalışılan ürünü sepette ara
    const found = basket.find((i) => i.id === product.id);

    if (!found) {
      // ürün sepette yoksa sepete ekle
      setBasket(basket.concat({ ...product, amount: 1 }));
    } else {
      // ürün sepette varsa sepettki elemanın miktarını arttır
      // güncel elemanı oluştur
      const updated = { ...found, amount: found.amount + 1 };

      // diziyi güncelle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      // statei güncelle
      setBasket(newBasket);
    }
  };

  // sepetteki ürünü kaldır
  const removeFromBasket = () => {};

  // sepetteki ürünün miktarı 1'den fazlaysa azalt 1 ise kaldır
  const decreaseAmount = () => {};

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
