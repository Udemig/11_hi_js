import { Link, useLocation } from "react-router-dom";

const Undefined = () => {
  const loc = useLocation();
  const status = loc.state ? loc.state : 404;

  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
      <h1 className="text-warning fw-bold">{status}</h1>

      <img
        src="404.gif"
        className="w-100 rounded"
        style={{ maxHeight: "300px", objectFit: "cover" }}
      />

      <p className="fs-1">Aradığınız sayfa bulunamadı</p>

      <p className="fs-1">
        <Link to="/">Anasayfa</Link> 'ya bir göz atabilirsiniz.
      </p>
    </div>
  );
};

export default Undefined;
