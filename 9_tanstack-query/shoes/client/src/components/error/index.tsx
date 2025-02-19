import { FC } from "react";

interface Props {
  message: string;
  refetch?: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="my-30 flex flex-col gap-4 items-center">
      <div className="bg-red-400 text-white rounded-md p-5 text-center">
        <p className="font-semibold">Üzgünüz bir sorun oluştu :(</p>
        <p className="mt-4">{message}</p>
      </div>

      {refetch && (
        <div className="flex justify-center mt-5">
          <button
            onClick={refetch}
            className="border py-1 px-4 rounded-md hover:bg-zinc-300/80 transition cursor-pointer"
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
