"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="client-comp gap-5 text-center">
      <h1>Bir şeyler ters gitti</h1>

      <h2>{error?.message}</h2>

      <button onClick={reset} className="border p-2 text-base">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
