import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import api from '../api';
import { ProductContext } from '../context/productContext';

const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext);

  const [categories, setCategories] = useState([]);

  // api'dan kategorileri al
  useEffect(() => {
    api
      .get('/products/categories') //
      .then((res) => setCategories(['all', ...res.data]));
  }, []);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <h2 className="d-flex align-items-center gap-2">
            <FaShopify className="text-warning" />
            Context Store
          </h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sepet">
                  Sepet
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategoriler
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    {categories.map((cat) => (
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className="dropdown-item"
                      >
                        {cat}
                      </button>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
