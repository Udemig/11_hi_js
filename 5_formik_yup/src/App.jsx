import { useFormik } from "formik";

const App = () => {
  // useFormik: formik'İn bütün özelliklerine erişmemizi sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan form veirlerinin ilk değeri
    initialValues: {
      email: "",
      age: "",
    },

    // form gönderildiğinde (hata yoksa) çalışıcak olan fonksiyon
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <div className="vh-100 vw-100">
      <div className="container p-5">
        <h2 className="text-center">FORMIK & YUP</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Yaş</label>
            <input
              className="form-control"
              type="text"
              name="age"
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit" className="my-5">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
