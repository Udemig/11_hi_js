import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

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

      toast.success("Ürün sepete eklendi");
    } else {
      // ürün sepette varsa sepettki elemanın miktarını arttır
      // güncel elemanı oluştur
      const updated = { ...found, amount: found.amount + 1 };

      // diziyi güncelle
      const newBasket = basket.map((i) =>
        updated.id === i.id ? updated : i
      );

      // statei güncelle
      setBasket(newBasket);

      toast.success(`Ürün sepete eklendi (${updated.amount})`);
    }
  };

  // sepetteki ürünü kaldır
  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((i) => i.id !== delete_id);

    setBasket(filtered);
  };

  // sepetteki ürünün miktarı 1'den fazlaysa azalt 1 ise kaldır
  const decreaseAmount = (delete_id) => {
    // miktarı azaltıcak elemanı bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // elemanın miktarı 1 den fazlaysa azalt
      const updated = { ...found, amount: found.amount - 1 };

      // diziyi güncelledik
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i güncelle
      setBasket(newBasket);

      toast.info(`Ürünün miktarı azaltıldı (${updated.amount})`);
    } else {
      // 1'e eşit ise kaldır
      removeFromBasket(delete_id);

      toast.error(`Ürün sepetten kaldırıldı`);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
