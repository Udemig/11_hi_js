import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(10);

  //1) componentDidMount: bileşenin ekrana basılma olayını izle
  useEffect(() => {
    console.log("bilşeşen geldi");
  }, []);

  // 2) componentWillUnmount: bileşenin ekrandan gitme anını izle
  useEffect(() => {
    //   bir fonksiyon return edilmeli
    return () => {
      console.log("bileşen gitti");
    };
  }, []);

  // 3) componentDidUpdate: bileşenin güncellenmesini izle
  useEffect(() => {
    console.log("bileşen güncellendi");
  }, [count]);

  // 4) biradarada kullanım
  useEffect(() => {
    console.log("Bileşen ekrana geldi / state güncellendi");

    return () => {
      console.log("bileşen gitti");
    };
  }, [count]);

  //5) render anını izleme
  useEffect(() => {
    console.log("RENDER ANINDA ÇALIŞIR");
  });

  return (
    <div className="d-flex gap-5 justify-content-center">
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-secondary"
      >
        -
      </button>

      <span className="fs-1 lead">Sayaç: {count}</span>

      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-success"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
