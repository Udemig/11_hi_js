import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  const totalPrice = basket.reduce(
    (total, i) => total + i.price * i.amount,
    0
  );

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
        <div className="rounded my-5 shadow border p-4 d-flex  justify-content-between align-items-center">
          <div className="fs-4">
            <p>
              Sepete{" "}
              <span className="text-warning fw-bold">
                {totalAmount} adet
              </span>{" "}
              ürün var
            </p>
            <p>
              Toplam fiyat{" "}
              <span className="text-success fw-bold">
                {totalPrice.toFixed(2)}₺
              </span>
            </p>
          </div>
          <button className="btn btn-warning py-3 px-4">
            Siparişi Onayla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
