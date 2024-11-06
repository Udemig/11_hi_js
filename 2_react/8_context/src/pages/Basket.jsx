import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import BasketItem from '../components/BasketItem';
import { Link } from 'react-router-dom';

const Basket = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="container mt-5">
      <h1>SEPET</h1>

      <div>
        {/* ürünler */}
        <div className="d-flex flex-column gap-5  mt-4">
          {basket.length === 0 ? (
            <div className="text-center fs-5">
              <p>Öncelikle sepete bir ürün ekleyiniz</p>
              <Link to="/" className="btn btn-primary">
                Ürünlere Git
              </Link>
            </div>
          ) : (
            basket.map((product) => (
              <BasketItem key={product.id} product={product} />
            ))
          )}
        </div>

        {/* toplam bilgisi */}
        <div></div>
      </div>
    </div>
  );
};

export default Basket;
