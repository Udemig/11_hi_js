import { useFormik } from "formik";
import schema from "../schema";
import InputField from "../InputField";
import { inputs } from "../constants";

const First = () => {
  // useFormik: formik'İn bütün özelliklerine erişmemizi sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan form veirlerinin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // formiğin hata yönetimi yapması için gerekli olan kurallar
    validationSchema: schema,

    // form gönderildiğinde (hata yoksa) çalışıcak olan fonksiyon
    onSubmit: async (values) => {
      // api isteği similasyonu
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });

      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="vh-100 vw-100">
      <div className="container p-5">
        <h2 className="text-center">FORMIK & YUP</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props, key) => (
            <InputField key={key} formik={formik} {...props} />
          ))}

          <button type="submit" className="my-5" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Yükleniyor" : "Gönder"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default First;
