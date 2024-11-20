import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  /*
   * Bizden istediği argümanlar
   * 1) reducer fn >> state'in nasıl değişeceğine karar veren fn
   * 2) intialState >> tutucağımız state'in ilk değeri
   
   * Bize döndürdüğü değerler
   * 1) state >> state'in güncel hali
   * 2) dispatch >> aksiyon'ları reducer'a aktaran method
   */
  const [count, dispatch] = useReducer(counterReducer, 100);

  return (
    <div className="h-screen">
      <h1 className="text-center my-5">SAYAÇ</h1>

      <div className="d-flex justify-content-center gap-4 align-items-center">
        <button onClick={() => dispatch("SIFIRLA")}>Sıfırla</button>
        <button onClick={() => dispatch("AZALT")}>-</button>
        <span className="fs-lead fs-1">{count}</span>
        <button onClick={() => dispatch("ARTTIR")}>+</button>
      </div>
    </div>
  );
};

export default Counter;
