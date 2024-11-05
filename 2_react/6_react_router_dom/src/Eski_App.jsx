import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";

const App = () => {
  // react-router-dom 'un özelliklerini kullanmamızı sağlar
  return (
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfaların ortak olarak kullanacağı bileşen */}
        <Header />

        {/* url'deki yola göre doğru elementi ekrana basar */}
        <Routes>
          {/* projedeki her bir sayfa için route tanımlarız */}
          <Route path="/" element={<Home />} />

          <Route path="/ürünler" element={<Products />} />

          {/* Dynamic Route > path params > : */}
          <Route path="/detay/:id" element={<Detail />} />

          {/* Nested Routes */}
          <Route path="/kategori" element={<Category />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />

            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* Undefined Route */}
          <Route path="*" element={<Undefined />} />
        </Routes>

        {/* Bütün sayfaların ortak olarak kullanacağı bileşen */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
