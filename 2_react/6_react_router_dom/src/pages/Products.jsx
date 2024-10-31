import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Products = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const params = {
      q: "",
    };

    axios
      .get("http://localhost:3060/books", { params })
      .then((res) => setBooks(res.data));
  }, []);

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
