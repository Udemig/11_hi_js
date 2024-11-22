const Error = ({ info, retry }) => {
  return (
    <div>
      <div className="bg-red-100 mt-20 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir hata oluştu</p>

        <p className="font-semibold">{info}</p>
      </div>

      {retry && (
        <div className="flex justify-center my-10">
          <button
            className="border py-2 px-4 rounded-md hover:bg-zinc-100 transition"
            onClick={retry}
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
