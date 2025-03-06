import { FC } from "react";
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import man from "@/app/assets/images/man.webp";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 p-2 bg-white flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image src={man} width={40} height={40} alt="profile" className="object-contain" />

          <div>
            <p className="font-semibold">Furkan Evin</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
