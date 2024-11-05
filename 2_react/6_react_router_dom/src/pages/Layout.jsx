import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="page">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
