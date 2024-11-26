import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import Header from "./components/header/index";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
