const Form = () => {
  return (
    <>
      <form className="flex flex-col">
        <label>Email</label>
        <input type="email" className="input" />

        <label className="mt-5">Şifre</label>
        <input type="text" className="input" />

        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
          Kaydol
        </button>
      </form>
    </>
  );
};

export default Form;
