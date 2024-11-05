import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [book, setBook] = useState(null);

  // Link elementinin görevini yapan yani kullanıcyı istediğimiz sayfaya yönlenerimeye yarayan bir fonksiyon
  const navigate = useNavigate();

  // urldeki id parametresini al
  const { id } = useParams();

  // api'dan kitabın bilgilerini al
  useEffect(() => {
    // api isteği at
    axios
      .get(`http://localhost:3060/books/${id}`)
      // başarılı olursa
      .then((res) => setBook(res.data))
      // hata olursa
      // undefined sayfasına yönlendir
      // hata kodu verisini yönlendirirken aktar
      .catch((err) => navigate("/undefined", { state: err.status }));
  }, []);

  // araüyüzü kitap bilgileriyle güncelle
  return !book ? (
    <p>Yükleniyor...</p>
  ) : (
    <div className="row my-5 p-5 mx-auto container">
      <div className="col-md-6 d-flex justiy-content-center align-items-center">
        <img src={book.image} className="rounded img-fluid shadow" />
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-4">
        <h1>{book.title}</h1>

        <div className="my-4">
          <Info title="Yazar" value={book.author} />
          <Info title="Yıl" value={book.year} />
          <Info title="Sayfa Sayısı" value={book.page} />
          <Info title="Ücret" value={book.price} />
          <Info title="Açıklama" value={book.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

// aynı dosyadaki 2.component
const Info = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
