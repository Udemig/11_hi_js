import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // urldeki arama pararemtlerine erişim / yönetim için
  // 1. değişkeni parametrelere erişim ve güncellemek için kullanırız
  // 2. değişkeni ise url'i güncellemek için kullanıyoruz
  const [searchParams, setSearchParams] = useSearchParams();

  // aratılan terim state'de tutulduğunda sayfayı yenileyince arama sıfırlandnağında veya başkalarıyla bulunan sonuçları paylaşmıyacağımızdan dolayu aratılan terimi arama parametresi olarak tutmalıyız
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    // eklenicek parametreyi belirle
    searchParams.set("search", text);

    // parametrelerde yapılan güncellemeyi url'e aktar
    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    const text = e.target.value;

    // mevcut parametrelerin arasına sort param ekle
    searchParams.set("sort", text);

    // url'i yeni parametreler ile güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      <div>
        <select
          defaultValue={searchParams.get("sort")}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">sırala</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="kitap ismi giriniz..."
          defaultValue={searchParams.get("search")}
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
