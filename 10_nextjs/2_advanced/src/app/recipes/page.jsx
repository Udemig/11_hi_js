import Image from "next/image";
import Link from "next/link";
import { getRecipes } from "../service";

// SSG(Static Site Generation) ile bu sayfa build anında bir kere oluşturulur ve her sayfaya girilidiğince build anında oluşturulan html indidilip kullanılır.
// Bu noktada tariflerde bir değişklik olursa bu kulalnıcıya yanısmaz
// Bunun önüne geçmek için Revalidate değerini tanımlamız sayesinde bu sayfa oluşturulduktan sonra belirli bir sürenin ardından bir daha sayfaya girlidğinde sayfanın tekrardan oluşturulamasını sağlar
export const revalidate = 2000;

// dynamic sayfa olsun (ssg kullanılmasın)
// export const dynamic = "force-dynamic"

// async server component
const Page = async () => {
  // api isteğini at
  // cevap beklediğimiz sürece ekrana loading.jsx basılır
  // hata gelirse error.jsx render edilir
  // data gelirse mevcut component render edilir
  const { recipes } = await getRecipes();

  return (
    <div className="server-comp">
      <h1 className="text-4xl font-bold">Tarifler</h1>

      <div>
        {recipes.map((item) => (
          <Link
            key={item.id}
            href={`/recipes/${item.id}`}
            className="flex gap-4 mt-10 p-2 rounded-md border hover:bg-zinc-200/10 transition"
          >
            <Image src={item.image} alt={item.name} width={100} height={100} />

            <div>
              <h1>{item.name}</h1>
              <h1>{item.cuisine}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
