import { getRecipe, getRecipes } from "../../service";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "./button";

// Bu detay sayfasının alabilecğei parametrelerin listesini döndürücez
// Next'de bu listedeki parametreler için detay sayfasının statik verisyonlarını oluşturucak
export async function generateStaticParams() {
  // bütün tarif verilini al
  const data = await getRecipes();

  // tarfilerlin id'lerinden oluşan bir dizi döndür
  return data.recipes.map((item) => ({ id: String(item.id) }));
}

const Page = async ({ params }) => {
  // urldeki parametreyi al
  const { id } = await params;

  if (id > 30) {
    return notFound();
  }

  // tarif verilerini alıcak api isteğini at
  const data = await getRecipe(id);

  return (
    <div className="server-comp">
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-between">
          <Link href="/recipes" className="border p-2 text-xl w-fit rounded-md">
            Geri
          </Link>

          <Button />
        </div>

        <h1>{data.name}</h1>

        <Image src={data.image} alt={data.name} width={150} height={150} className="rounded-md mx-auto" />

        <h1 className="flex justify-between">
          <span>Mutfak:</span>
          <span> {data.cuisine}</span>
        </h1>

        <h1 className="flex justify-between">
          <span>Rayting:</span>
          <span> {data.rating}</span>
        </h1>

        <h1 className="flex justify-between">
          <span>Zorluk:</span>
          <span> {data.difficulty}</span>
        </h1>
      </div>
    </div>
  );
};

export default Page;
