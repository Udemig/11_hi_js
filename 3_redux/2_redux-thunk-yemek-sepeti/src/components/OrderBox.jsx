const OrderBox = ({ cart }) => {
  // sepetteki toplam ürün adedi
  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  // sepetteki ürünlerin toplam fiyatı
  const totalPrice = cart.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="p-5 rounded-md border h-fit">
      <h2 className="font-semibold text-xl">Sipariş Detayları</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Ürün Adedi:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Toplam Fiyatı:</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)}
        </span>
      </p>

      <button className="bg-red-500 p-1 px-3 rounded-md text-white transition hover:bg-red-400">
        Siparişİ Onayla
      </button>
    </div>
  );
};

export default OrderBox;
