const Error = ({ info }) => {
  return (
    <div className="text-center my-20">
      <p className="mb-10">Üzgünüz bir sorun oluştu</p>

      <p className="font-semibold">{info}</p>

      <p className="mt-10">Daha sonra tekrar deneyiniz</p>
    </div>
  );
};

export default Error;
