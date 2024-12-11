import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header className="bg-white p-2 px-3 d-flex justify-content-between align-items-center shadow">
      <Link to="/" className="d-flex gap-2 align-items-center">
        <img src="/radar-logo.webp" width={40} />
        <h4>Uçuş Radarı</h4>
      </Link>

      <Buttons />

      <h6 className="text-black fw-bold info">
        {isLoading
          ? "Uçuşlar Aranıyor..."
          : error
          ? error
          : `${flights.length} Uçuş Bulundu`}
      </h6>
    </header>
  );
};

export default Header;
