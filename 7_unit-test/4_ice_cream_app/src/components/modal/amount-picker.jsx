import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const AmountPicker = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex border rounded-md">
      <button
        className="px-3 py-1 border-r hover:bg-white/30 transition"
        onClick={() => dispatch(deleteFromCart(item))}
      >
        -
      </button>

      <span className="w-8 text-center py-1">{item.amount}</span>

      <button
        className="px-3 py-1 border-r hover:bg-white/30 transition"
        onClick={() => dispatch(addToCart({ item, selectedType: item.type }))}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
