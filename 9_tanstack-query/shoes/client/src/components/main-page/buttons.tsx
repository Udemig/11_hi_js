import { FC } from "react";

const Buttons: FC = () => {
  return (
    <div className="my-8 flex gap-5 lg:hidden">
      <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition cursor-pointer">
        Filtreler
        <img src="/filter.svg" alt="filter" />
      </button>

      <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between hover:bg-gray-100 transition cursor-pointer">
        Sırala
        <img src="/down.svg" alt="down" />
      </button>
    </div>
  );
};

export default Buttons;
