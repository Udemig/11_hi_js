import Link from "next/link";

const Page1 = () => {
  return (
    <div className="text-center">
      <h1>Page - 1</h1>
      <h1>Ürünler Sayfası</h1>

      <br />
      <br />

      <Link href="page-1/page-2">Diğer sayfaya git</Link>
    </div>
  );
};

export default Page1;
