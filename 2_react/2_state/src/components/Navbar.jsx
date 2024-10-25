const Navbar = (props) => {
  return (
    <header className="d-flex justify-content-between pt-5">
      <h1 className="fw-bold">STATE</h1>

      <div>
        <label className="switch">
          <input
            onChange={(e) => props.setIsLight(e.target.checked)}
            type="checkbox"
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
