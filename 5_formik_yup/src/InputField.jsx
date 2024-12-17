const InputField = ({ formik, label, type, name }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className={`form-control ${
          formik.touched[name] && formik.errors[name] && "is-invalid"
        }`}
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <span className="feedback">{formik.errors[name]}.</span>
    </div>
  );
};

export default InputField;
