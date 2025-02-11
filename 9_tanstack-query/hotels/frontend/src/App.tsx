import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Header from "./components/header";
import { FC } from "react";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/place/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
