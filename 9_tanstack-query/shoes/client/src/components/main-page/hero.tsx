import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative">
      <div className="absolute text-white top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10">
        <p className="text-[15px] sm:text-[17px] lg:text-[20px] xl:text-[24px] font-open xl:font-semibold text-gray">
          Sadece geçerli süreyle
        </p>

        <h1 className="text-[23px] sm:text-[27px] md:text-[32px] lg:text-[50px] xl:text-[74px] font-semibold">
          %30 indirim
        </h1>

        <p className="font-open text-gray text-[14px] sm:text-[18px] lg:text-[20x] xl:text-[24px] max-w-[80%]">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>

      <img src="/banner.png" alt="banner" className="max-md:min-h-[170px]" />
    </div>
  );
};

export default Hero;
