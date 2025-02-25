import Link from "next/link";

const Reviews = async ({ params }) => {
  const { productId } = await params;

  return (
    <div>
      <Link href=".">Geri Dön</Link>

      <h1 className="my-20">
        <span className="text-red-500">{productId} id'li </span> <br />
        <span>Ürünün Yorumlar Sayfası</span>
      </h1>
    </div>
  );
};

export default Reviews;
