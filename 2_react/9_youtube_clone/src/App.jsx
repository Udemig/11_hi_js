import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />

        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
