"use client";

import { useParams, useSearchParams } from "next/navigation";

const Button = () => {
  // url'deki parametreler erişme
  const { id } = useParams();
  // arama parametrelerine erişme
  const searchParams = useSearchParams();

  const handleClick = () => {
    "id'ye api isteği atıldı";
  };

  return <button onClick={handleClick}>Sil</button>;
};

export default Button;
