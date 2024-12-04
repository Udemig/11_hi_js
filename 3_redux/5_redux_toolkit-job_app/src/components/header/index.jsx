import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <h2>İş Takip</h2>

      <nav>
        <NavLink to="/">İş Listesi</NavLink>
        <NavLink to="/create">İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
