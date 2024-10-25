import { useState, useRef, useEffect } from "react";

const Example = () => {
  const renderRef = useRef(0);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /*
   * useRef'i jsx elementinin referansını tutmaktan ziyade bir değişkeni saklamak içinde kullanabiliyoruz.
   * Zaten değşikeni state'i ile saklayabiliyoruz useRef'in fark ne?
   * useRef ile tutulan değeişkenin değişmesi rendera sebep olmaz.
   * Bundan dolayı ekrana basmak istemeyeciğiniz değişkenleri usState yerine usRef ile tutabilrisiniz
   */

  // sayfa kaç kez render olundu
  useEffect(() => {
    renderRef.current++;

    console.log(renderRef.current);
  });

  return (
    <div>
      <hr className="my-5" />

      <p>
        Sayaç: {count} <br />
        İsim: {name}
      </p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-danger"
      >
        Sayacı Arttır
      </button>

      <input
        onChange={(e) => setName(e.target.value)}
        className="form-control mt-4"
        type="text"
        placeholder="İsminiz..."
      />
    </div>
  );
};

export default Example;
