"use client";

import { Car } from "@/app/types";
import { getPaymentUrl } from "@/app/utils/service";
import { useState } from "react";
import Loader from "../loader";

interface Props {
  car: Car;
}

const RentButton = ({ car }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRent = () => {
    setIsLoading(true);

    // api'a ödeme oturumu oluşturması için araç biligileri ile istek at
    // api'a satın alım sayfasının url'ini oluşturup döndürücek
    getPaymentUrl(car)
      // kullanıcyı satın alım sayfasına yönlendir
      .then((data) => {
        window.location.href = data.url;
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      onClick={handleRent}
      className="bg-basic-blue py-2 px-6 text-white rounded-md hover:brightness-90 transition min-w-[150px]"
    >
      {isLoading ? <Loader size="size-5" /> : "Şimdi Kirala"}
    </button>
  );
};

export default RentButton;
