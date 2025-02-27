import Link from "next/link";

const Page = () => {
  return (
    <div className="text-center">
      <h1>Page - 2</h1>
      <h1>Detay Sayfası</h1>
      <h1 className="text-blue-500">Orjinal Sayfa</h1>

      <br />
      <br />

      <Link href="/page-1">Geri git</Link>
    </div>
  );
};

export default Page;
