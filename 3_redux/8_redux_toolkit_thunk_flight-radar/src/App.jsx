import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Map from "./pages/Map";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFlights } from "./redux/actions";
import Modal from "./components/Modal";

const App = () => {
  // detayı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {/* detailId state'i doluysa ekrana modal bas ve id propu gönder */}
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
