import { useRef } from "react";

const RefExample = () => {
  //* boş bir referans nesnesi oluşturuyoruz
  const inputRef = useRef();

  /*
   * return satırı dışarısında js kodu içerisinde jsx elementine erişmek istiyoruz.
   * klasik js yazıyor olsaydık bir elemente erişmek için querySelector getElementById.. methodlarını kullanırdık.
   * react'ta ise bu methodların yerine jsx elementine erişebilmek için useRef hooku kullanılır
   */
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  };

  return (
    <div className="my-5 text-center">
      <button onClick={handleClick} className="mb-5 btn btn-warning">
        Odaklan
      </button>

      <input
        ref={inputRef}
        type="text"
        className="form-control shadow"
        placeholder="bişeyler aratın..."
      />
    </div>
  );
};

export default RefExample;
