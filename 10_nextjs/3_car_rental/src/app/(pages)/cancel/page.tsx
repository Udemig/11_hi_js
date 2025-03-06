import Link from "next/link";
import { MdCancel as Cancel } from "react-icons/md";

const Page = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Cancel className="text-[70px]" />

          <p className="font-semibold  text-4xl text-center">Ödeme Başarısız Oldu</p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-10 text-center text-black">
        <p className="text-lg">Ödeme anında bir sorun oluştu</p>

        <p className="mt-5 mb-10 text-zinc-600">Anasayfaya dönüp tekrar deneyebilirisniz</p>

        <Link href="/" className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg">
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default Page;
