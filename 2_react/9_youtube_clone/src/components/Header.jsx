import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // navigate kurulm
  const navigate = useNavigate();

  // form gönderilince arama sayfasına yönlendir
  const handleSubmit = (e) => {
    e.preventDefault();

    // aratılan metne eriş
    const text = e.target[0].value;

    // kullanıcyı aramas onuçları sayfasına yönlendir
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center px-2 py-4 sm:px-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-10 sm:w-12" src="/youtube.png" />
        <h1 className="text-xl sm:text-2xl font-mono">YouTube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          defaultValue={query}
          className="bg-black outline-none rounded-l-[20px] px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-500"
          type="text"
        />

        <button className="px-3 sm:px-4  sm:text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300 ">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-lg cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition" />
        <IoVideocam className="hover:text-gray-400 transition" />
        <MdVideoLibrary className="hover:text-gray-400 transition" />
      </div>
    </header>
  );
};

export default Header;
