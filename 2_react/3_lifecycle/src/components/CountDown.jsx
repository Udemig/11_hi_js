import { useEffect, useState } from "react";

// useEffection componentWillUnmount yani bileşenin ekrandna gitme anını izlemememizi sağlayan kullanımı genelde performans sebepleriyle kullanılır

const CountDown = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((lastNumber) => lastNumber + 1);
    }, 1000);

    // performans kaybını önlemek için sayaça ekrndan gittiğinde sayım durmalı
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    // setState methodu asenkron bir şekilde çalıştğından state'i bir fonksiyon içerisnde birden fazla kere güncellemde sorun yaşarız
    setNumber(number + 1); // 10 + 1
    setNumber(number + 1); // 10 + 1
    setNumber(number + 1); // 10 + 1
    setNumber(number + 1); // 10 + 1

    // bu soruna çözüm olarak setState mehodunun 2. kullanımı vardır. bu kullanımda bir fonksiyon atarız ve o fonksiyon parametre olarak state'in son değerini alır ve fonksiyondan return edilen değeri state'e aktarır
    setNumber((lastNumber) => lastNumber + 1); // 10 + 1
    setNumber((lastNumber) => lastNumber + 1); // 11 + 1
    setNumber((lastNumber) => lastNumber + 1); // 12 + 1
    setNumber((lastNumber) => lastNumber + 1); // 13 + 1
  };

  return (
    <div className="text-center">
      <h1 style={{ fontSize: 90 }}>{number}</h1>

      <button onClick={handleClick} className="btn btn-warning mt-5">
        Arttır
      </button>
    </div>
  );
};

export default CountDown;
