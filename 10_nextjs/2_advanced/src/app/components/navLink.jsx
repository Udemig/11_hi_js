"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, label }) => {
  // kullanıcnın bulunduğu sayfanın url'deki path değerini verir
  const currentPath = usePathname();

  return (
    <Link className={currentPath === path ? "active" : ""} href={path}>
      {label}
    </Link>
  );
};

export default NavLink;
