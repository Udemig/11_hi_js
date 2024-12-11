const Error = ({ info }) => {
  return (
    <div className="error">
      <p>Bir sorun oluştu</p>

      <p>{info}</p>
    </div>
  );
};

export default Error;
