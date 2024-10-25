const Card = (props) => {
  return (
    <div className="card">
      <img src={props.url} width={400} />

      <div>
        <h3>{props.title}</h3>

        <h4>Çevre Birimi</h4>

        <div className="bottom">
          <p>{props.price}₺</p>

          <button>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
