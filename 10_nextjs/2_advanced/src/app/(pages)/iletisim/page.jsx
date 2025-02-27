"use client";

import { useEffect } from "react";

const Page = () => {
  console.log("İletişim render oldu");

  return (
    <div onClick={() => alert("selam")}>
      <h1 className="text-center">İletişim Sayfası</h1>
      <h2 className="client">Client Component (CSR)</h2>
    </div>
  );
};

export default Page;
