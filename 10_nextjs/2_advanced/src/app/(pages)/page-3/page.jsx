import Link from "next/link";

const Page3 = () => {
  return (
    <div className="text-center">
      <h1>Page 3</h1>

      <br />
      <br />

      <Link href="/page-4">Diğer Sayfaya git</Link>
    </div>
  );
};

export default Page3;
