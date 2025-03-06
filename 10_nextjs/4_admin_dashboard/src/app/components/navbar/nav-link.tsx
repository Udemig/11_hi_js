"use client";

import { Option } from "@/app/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
  item: Option;
};

const NavLink: FC<Props> = ({ item }) => {
  const path = usePathname();

  const isActive = path === item.url;

  return (
    <Link
      href={item?.url || "/"}
      className={`flex gap-2 items-center p-5 hover:bg-gray-100 transition border-l-2 border-transparent ${
        isActive && "text-blue-500 !border-blue-500"
      }`}
    >
      {item.icon}

      <span className="nav-text">{item.name}</span>
    </Link>
  );
};

export default NavLink;
