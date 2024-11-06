import api from '../api';
import { createContext, useEffect, useState } from 'react';

//* 1.Adım: Context yapısının temelini oluştur.
export const ProductContext = createContext();

//* 2.Adım: Context yapısında tutulcak veirleri/fonksiyonları ve bunları diğer bileşenlere aktarıcak sağlayıcıyı tanımla
export const ProductProvider = ({ children }) => {
  // sağlayıcı içierisnde tutulacak olan stateleri tanımlarız
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const url =
      selectedCategory === 'all'
        ? '/products'
        : `/products/category/${selectedCategory}`;

    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //* 3.Adım: Uygulamaya sağlanacak verileri belirle.
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
