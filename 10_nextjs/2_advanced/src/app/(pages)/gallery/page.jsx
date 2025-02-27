import Link from "next/link";
import { data } from "../../constants";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center text-3xl font-bold mb-10">Dünyanın 7 Harikası</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.map((item) => (
          <Link key={item.id} href={`/gallery/${item.id}`}>
            <Image
              src={item.src}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-md"
              quality={20}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
