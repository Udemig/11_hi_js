const Filter = () => {
  // aratılan terim state'de tutulduğunda sayfayı yenileyince arama sıfırlandnağında veya başkalarıyla bulunan sonuçları paylaşmıyacağımızdan dolayu aratılan terimi arama parametresi olarak tutmalıyız

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      <div>
        <select className="form-select">
          <option value="">sırala</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>

      <form className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="kitap ismi giriniz..."
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
