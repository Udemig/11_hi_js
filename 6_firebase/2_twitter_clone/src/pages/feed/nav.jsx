import { navSections } from "../../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { BiSolidDoorOpen } from "react-icons/bi";

const Nav = ({ user }) => {
  return (
    <nav className="flex flex-col justify-between items-end px-2 py-4">
      <div>
        <img src="x-logo.webp" alt="x-logo" className="w-14 mb-4" />

        {navSections.map((item, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-fourth max-md:justify-center"
          >
            {item.icon}

            <span className="whitespace-nowrap max-md:hidden">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* USER */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <img
            src={user?.photoURL}
            referrerPolicy="no-referrer"
            className="rounded-full max-w-[45px] shadow-md shadow-[#ffffff3f]"
          />
          <p className="max-md:hidden">{user.displayName}</p>
        </div>

        <button
          className="flex justify-center items-center gap-2 text-2xl md:text-base p-1 bg-fourth rounded transition hover:bg-zinc-900 max-md:p-2"
          onClick={() => signOut(auth)}
        >
          <BiSolidDoorOpen />
          <span className="max-md:hidden">Çıkış Yap</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
