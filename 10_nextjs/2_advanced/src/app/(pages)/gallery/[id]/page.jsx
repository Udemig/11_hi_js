import { data } from "../../../constants";
import Image from "next/image";
import Link from "next/link";

const Detail = async ({ params }) => {
  // url'deki id parametresini al
  const { id } = await params;

  // data dizisinden id'si bilinen elemanı al
  const item = data.find((i) => i.id === id);

  if (!item) return <div>Eleman Bulunamadı</div>;

  return (
    <div className="min-h-screen p-5 md:p-10 mx-auto text-3xl">
      <div className="w-4/5 lg:w-1/2 mx-auto">
        <Link href="." className="text-lg border p-2 px-4 rounded-md">
          Geri
        </Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">{item.name}</h1>

        <Image src={item.src} alt={item.name} quality={20} className="w-full object-cover aspect-square rounded-md" />

        <div className="my-10">
          <h3 className="text-lg">Fotoğrafçı</h3>
          <span>{item.photographer}</span>
        </div>

        <div className="my-10">
          <h3 className="text-lg">Lokasyon</h3>
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
