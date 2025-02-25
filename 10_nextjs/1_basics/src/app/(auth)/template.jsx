"use client";
// Bu layout bileşeni sadece (auth) route gurubundaki sayfları etkiler
// Layout componentları HOC'lardır.

import Link from "next/link";
import { useState } from "react";

const Template = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <div className="flex w-full p-5 gap-10">
      <aside className="border rounded text-base nav flex flex-col">
        <h1>Merhaba {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} className="text-black" />
        <Link href="/login">Giriş Yap</Link>
        <Link href="/signup">Kayıt Ol</Link>
      </aside>

      <div>{children}</div>
    </div>
  );
};

export default Template;
