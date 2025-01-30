import { FC } from "react";
import SearchBar from "./SearchBar";
import Year from "./Year";

const Filter: FC = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="filter">
      <div className="home-text-container">
        <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
        <p>Beğenebileceğin arabaları keşfet</p>
      </div>

      <div className="home-filters">
        <SearchBar />

        <div className="home-filter-container">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;
