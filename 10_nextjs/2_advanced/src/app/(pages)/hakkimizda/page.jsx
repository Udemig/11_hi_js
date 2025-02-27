// Server componentlarda kullanıcı etkişlimini takip edemeyiz: (onClick,onSubmit,onChange)
// Server componentlarda hooks kullanılamaz: (useEffect,useState,useRef,useReducer...)

import { redirect } from "next/navigation";
import Button from "../../components/button";

const Page = () => {
  if ("kullanıcın yetkisi yoksa") {
    redirect("/iletisim");
  }

  console.log("Hakkımızda render oldu");
  return (
    <div className="server-comp">
      <div>
        <h1 className="text-center">Hakkımızda Sayfası</h1>
        <h2 className="server">Server Component (SSR)</h2>
      </div>

      <Button />
    </div>
  );
};

export default Page;
