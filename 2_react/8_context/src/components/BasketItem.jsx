const BasketItem = ({ product }) => {
  return (
    <div className="d-flex align-items-center gap-3 gap-md-4 shadow border p-3 rounded p-md-4">
      <div>
        <img
          src={product.image}
          height={60}
          width={60}
          className="object-fit-contain"
        />
      </div>

      <div>
        <div>
          <h5 className="fw-bold text-truncate">
            {product.title.slice(0, 40)}
          </h5>
          <p className="text-secondary">{product.category}</p>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-4">
          <div className="rounded-2 overflow-hidden">
            <button>-</button>
            <button>+</button>
          </div>

          <h4>{product.amount}</h4>

          <button className="rounded-2">sil</button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
