import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 fs-3">Kitap Kurdu</span>

        <nav className="d-flex gap-2">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/ürünler">Ürünler</NavLink>
          <NavLink to="/kategori">Kategori</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
