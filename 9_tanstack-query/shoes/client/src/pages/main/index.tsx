import { FC } from "react";
import Hero from "../../components/main-page/hero";
import Buttons from "../../components/main-page/buttons";
import Filter from "../../components/main-page/filter";
import List from "../../components/main-page/list";

const Main: FC = () => {
  return (
    <div>
      <Hero />

      <Buttons />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mb-4 md:mt-[28px] xl:mt-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        {/* <div className="max-lg:hidden">
          <Filter />
        </div> */}
        <div className="col-span-4 ">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Main;
