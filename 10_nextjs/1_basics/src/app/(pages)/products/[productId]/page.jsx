import Link from "next/link";

// statik metadata tanımı
// export const metadata = {
//   title: "Ürün Detay",
// };

// dinamik metadata tanımı
export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;

  return {
    title: id + "id'li Ürünün Detayı",
  };
};

// Dinamik sayfalarda urldeki parametreye erişmek için herhangi bir hooka ihtiyç duymayız urldeki parametreler component'a prop olarak gelir.

// Paremtre propları asenkron şekilde geldiği için async await ile erişbebilirsiniz
const Detail = async ({ params }) => {
  const id = (await params).productId;

  return (
    <div>
      <Link href=".">Geri Dön</Link>

      <h1 className="my-20">
        <span className="text-red-500">{id} id'li </span> <br />
        <span>Ürünün Detay Sayfası</span>
      </h1>

      <Link href={`${id}/reviews`}>Yorumlara Bak</Link>
    </div>
  );
};

export default Detail;
