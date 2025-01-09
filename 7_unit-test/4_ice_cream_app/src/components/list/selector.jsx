const Selector = ({ selectedType, handleType }) => {
  return (
    <div>
      <p className="mt-5">Sipariş Tipi:</p>

      <div className="flex mt-3 gap-5">
        <button
          className={`select-btn ${
            selectedType === "cornet" && "bg-white text-black"
          }`}
          onClick={() => handleType("cornet")}
        >
          Külahta
        </button>

        <button
          className={`select-btn ${
            selectedType === "cup" && "bg-white text-black"
          }`}
          onClick={() => handleType("cup")}
        >
          Bardakta
        </button>
      </div>
    </div>
  );
};

export default Selector;
