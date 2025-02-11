import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Edit from "./pages/edit";
import Create from "./pages/create";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<Create />} />

        <Route element={<Layout />}>
          <Route path="/note/:id" element={<Detail />} />
          <Route path="/note/:id/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
