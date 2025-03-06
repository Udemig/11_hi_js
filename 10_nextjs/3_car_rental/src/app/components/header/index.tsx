import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaHeart } from "react-icons/fa";
import { AiFillDollarCircle as Dollar } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center py-5 px-7 lg:py-8 lg:px-10">
      <Link href="/" className="text-basic-blue font-bold text-2xl lg:text-4xl">
        DRIVE
      </Link>

      <form className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2">
        <button className="text-zinc-700 text-xl">
          <CiSearch />
        </button>
        <input type="text" placeholder="Bir marka aratın" className="outline-none text-zinc-800" />
      </form>

      <div className="flex items-center gap-3">
        <div className="icon max-sm:hidden">
          <FaHeart />
        </div>
        <div className="icon max-sm:hidden">
          <FaBell />
        </div>
        <Link href="/orders" className="icon text-lg">
          <Dollar />
        </Link>
      </div>
    </header>
  );
};

export default Header;
