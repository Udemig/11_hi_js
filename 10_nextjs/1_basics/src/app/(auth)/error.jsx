"use client";

// Error componentlar "use client" ile işaretlenmli

// Error componentları otomatik olarak hata bilgilierini ve api isteğini tekrar atmaya yarayan fonksiyonu prop olarak alır
const Error = ({ error, reset }) => {
  return (
    <div className="text-base bg-red-500 rounded-md p-5 text-center w-full">
      <p>Bir sorun oluştu</p>
      <p className="my-5">{error.message}</p>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
