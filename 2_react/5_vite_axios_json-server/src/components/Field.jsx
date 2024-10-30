const Field = ({ label, name, value }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type="text" name={name} required defaultValue={value} />
    </div>
  );
};

export default Field;
