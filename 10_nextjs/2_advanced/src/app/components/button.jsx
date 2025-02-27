"use client";

const Button = () => {
  return (
    <div className="client-comp">
      <button className="border p-2 rounded-md text-xl" onClick={() => alert("mail gönderildi")}>
        Mail Gönder
      </button>

      <h2 className="client">Client Component (CSR)</h2>
    </div>
  );
};

export default Button;
