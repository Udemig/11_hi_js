import { FC } from "react";
import { CgUnavailable as Fail } from "react-icons/cg";
import { MdEventAvailable as Ok } from "react-icons/md";

interface Props {
  data: boolean;
  expand?: boolean;
}

const Status: FC<Props> = ({ data, expand }) => {
  return (
    <div className={`flex items-center gap-4 border border-zinc-200 p-2 rounded-md ${data ? "bg-green-100" : "bg-red-100"}`}>
      {data ? (
        <Ok className="text-xl text-green-700" /> //
      ) : (
        <Fail className="text-xl text-red-700" />
      )}

      {expand && <p className="font-bold">{data ? "Şuan Konaklanabilir" : "Konaklama için müsait değil"} </p>}
    </div>
  );
};

export default Status;
