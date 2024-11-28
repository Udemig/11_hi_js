import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="vh-100 w-100 w-full d-grid place-items-center">
      <div className="d-flex flex-column gap-5 align-items-center justify-content-center">
        <h2>SAYAÇ</h2>

        <div className="d-flex gap-4 align-items-center justify-content-center">
          <button onClick={() => dispatch(decrease())} className="bg-danger">
            Azalt
          </button>

          <span className="fs-1">{count}</span>

          <button onClick={() => dispatch(increase())} className=" bg-success">
            Arttır
          </button>

          <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
