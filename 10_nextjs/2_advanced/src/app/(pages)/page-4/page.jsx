import Link from "next/link";

const Page4 = () => {
  return (
    <div className="text-center">
      <h1>Page 4</h1>
      <h1 className="text-blue-500">Orjinal Sayfa</h1>

      <br />
      <br />

      <Link href="/page-3">Geri Git</Link>
    </div>
  );
};

export default Page4;
