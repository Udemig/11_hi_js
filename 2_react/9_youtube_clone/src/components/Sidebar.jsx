import { Link } from "react-router-dom";
import { categories } from "../constants";

const Sidebar = ({ selectedCat }) => {
  return (
    <aside className="flex flex-col p-1 md:p-4">
      {categories.map((i) => (
        <Link to={i.path == "/" ? "/" : `/?category=${i.path}`}>
          <div
            className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition ${
              (i.path === selectedCat ||
                (i.path === "/" && !selectedCat)) &&
              "bg-[#242424]"
            }`}
          >
            <span className="max-md:text-2xl">{i.icon}</span>
            <span className="max-md:hidden">{i.name}</span>
          </div>

          {i.divider && <hr />}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
