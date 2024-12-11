import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  // görüntülenecek ilk elemanın dizideki sırası
  const [start, setStart] = useState(0);

  // sayfa başına gösterilecek eleman sayısı
  const perPage = 10;

  // görüntülenecek son elemanın dizideki sırası
  const end = start + perPage;

  // slice ile başlangıç ve bitiş arasını kes
  const currentFlights = flights.slice(start, end);

  // toplam sayfa sayısını hesapla
  const totalPage = Math.ceil(flights.length / perPage);

  // sayfa değiştiğinde state'i güncelle
  const handleChange = (event) => {
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <Error info={error} />
      </div>
    );

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-1">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currentFlights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>{flight.deg}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        previousLabel="< geri"
        className="pagination"
        onPageChange={handleChange}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
