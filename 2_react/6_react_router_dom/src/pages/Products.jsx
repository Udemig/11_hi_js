import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [books, setBooks] = useState([]);

  // urldeki arama parametrelerine eriş
  const [searchParams] = useSearchParams();

  // parametreler her değiştiğinde api isteği at
  useEffect(() => {
    // api'a gönderilcek paramtrleri urldekilere eşitle
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    axios
      .get("http://localhost:3060/books", { params })
      .then((res) => setBooks(res.data));
  }, [searchParams]);

  return (
    <div className="container my-5">
      <h3>{books.length} kitap bulundu</h3>

      <Filter />

      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
