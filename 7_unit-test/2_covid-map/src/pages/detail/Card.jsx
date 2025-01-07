const Card = ({ item }) => {
  return (
    <div className="p-5 border text-black shadow rounded-md">
      <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>

      <h2 className="text-lg">{item[1]}</h2>
    </div>
  );
};

export default Card;
