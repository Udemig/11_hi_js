"use client";

import { Car } from "@/app/types";
import { getPaymentUrl } from "@/app/utils/service";

interface Props {
  car: Car;
}

const RentButton = ({ car }: Props) => {
  const handleRent = () => {
    // api'a ödeme oturumu oluşturması için araç biligileri ile istek at
    // api'a satın alım sayfasının url'ini oluşturup döndürücek
    getPaymentUrl(car)
      // kullanıcyı satın alım sayfasına yönlendir
      .then((data) => console.log(data));
  };

  return (
    <button
      onClick={handleRent}
      className="bg-basic-blue py-2 px-6 text-white rounded-md hover:brightness-90 transition min-w-[150px]"
    >
      Şimdi Kirala
    </button>
  );
};

export default RentButton;
