import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import WatchList from "./pages/watch-list";
import Home from "./pages/home";
import Header from "./components/header/index";
import Footer from "./components/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  // izleme listesine eklenmiş olan filmleri al ve store aktar
  useEffect(() => {
    dispatch(getWatchList());
  }, []);

  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/watch-list" element={<WatchList />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
