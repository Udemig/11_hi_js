import { useRef, useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({});

  const emailRef = useRef();
  const passRef = useRef();

  // form gönderililnce çalışır:
  const handleSubmit = (e) => {
    e.preventDefault();
    // hataları tutucağımız nesne
    const errors = {};

    // form alanlarını kontrol et
    if (!emailRef.current.value) {
      errors.email = "İsim Zorunludur";
    }

    if (!passRef.current.value) {
      errors.password = "Şifre Zorunludur";
    }

    // güncel hataları state'e aktar
    setErrors(errors);

    // eğer hata varsa, ilk hatalı alana kullnıcıyı odakla
    if (Object.keys(errors).length > 0) {
      if (errors.email) {
        emailRef.current.focus();
      } else if (errors.password) {
        passRef.current.focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-5">
      <div className="relative">
        <label>Email</label>
        <input ref={emailRef} className="form-control mt-1" type="text" />

        {errors.email && <p className="err">{errors.email}</p>}
      </div>

      <div className="relative">
        <label>Şifre</label>
        <input ref={passRef} className="form-control mt-1" type="text" />
        {errors.password && <p className="err">{errors.password}</p>}
      </div>

      <button className="btn btn-primary">Gönder</button>
    </form>
  );
};

export default Form;
