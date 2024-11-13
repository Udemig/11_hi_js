import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/index";
import { BasicLoader } from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(1);

  // urldeki amama parametresine eriş
  const query = searchParams.get("search_query");

  // api'dan aratılan kelimeye uygun videoları al
  useEffect(() => {
    setIsLoading(true);
    // eğerki sayfa sayısı arttıysa token'i parametrelere ekle
    const params = { query, token: page > 1 ? token : undefined };

    api
      .get("/search", { params })
      .then((res) => {
        // yeni gele verileri önceki dizinin devamına ekle
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query, page]); // sayfa her değiştiğinde

  // aratılan kelime her değiştiğinede stateleri sıfırla
  useEffect(() => {
    setData([]);
    setToken(null);
    setPage(1);
  }, [query]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[93vh] overflow-y-auto">
      <h2 className="text-xl mb-5">
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>

      <div className="wrapper flex flex-col gap-5 justify-center">
        {error ? (
          <Error info={error} />
        ) : (
          data.map(
            (item) =>
              item.type === "video" && <Card key={item.videoId} video={item} isRow />
          )
        )}

        {isLoading && <BasicLoader />}
      </div>

      <div className="flex justify-center">
        <button
          disabled={isLoading}
          onClick={() => setPage(page + 1)}
          className={`bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition`}
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
