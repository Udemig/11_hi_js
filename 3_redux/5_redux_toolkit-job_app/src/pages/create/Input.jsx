const Input = ({ label, name, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" name={name} onChange={handleChange} />
    </div>
  );
};

export default Input;
