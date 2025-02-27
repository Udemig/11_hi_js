"use client";
import { data } from "../../../../../constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Modal = () => {
  const { id } = useParams();
  const router = useRouter();

  const item = data.find((i) => i.id === id);

  const close = () => {
    router.back();
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm grid place-items-center fixed inset-0">
      <div className="w-4/5 md:w-2/3 h-4/5 bg-white rounded-md px-10 pb-10 text-3xl flex flex-col gap-5 text-black text-center overflow-auto">
        <div className="flex justify-between mt-3">
          <button onClick={close}>X</button>
          <button onClick={refresh}>?</button>
        </div>

        <Image src={item.src} alt={item.name} className="aspect-square max-h-[300px] object-cover rounded-md" />

        <h2>{item.name}</h2>

        <div className="my-3">
          <h3 className="text-lg">Fotoğrafçı</h3>
          <span>{item.photographer}</span>
        </div>

        <div className="my-3">
          <h3 className="text-lg">Lokasyon</h3>
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
