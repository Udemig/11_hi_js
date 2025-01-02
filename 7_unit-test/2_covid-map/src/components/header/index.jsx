import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-gray-500/70 bg-blue-900 text-white">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center">
          <PiVirus className="text-4xl text-pink-600" />
          <spa className="font-semibold text-xl">Covid-19</spa>
        </Link>

        <nav className="flex gap-4">
          <Link to="#">Anasayfa</Link>
          <Link to="#">Sonuçlarımız</Link>
          <Link to="#" className="max-md:hidden">
            Hakkımızda
          </Link>
          <Link to="#" className="max-md:hidden">
            İletişim
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
