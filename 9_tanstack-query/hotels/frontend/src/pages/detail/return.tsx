import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Return: FC = () => {
  return (
    <div className="flex">
      <Link to="/" className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-100">
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default Return;
