import { FC } from "react";
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import man from "@/app/assets/images/user_image.webp";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 p-2 bg-white flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image
            src={man}
            width={50}
            height={50}
            alt="profile"
            className="size-12 rounded-full"
          />

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
