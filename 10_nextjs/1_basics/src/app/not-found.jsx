import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-600">404</h1>

      <h2 className="my-10">Aradığınız sayfa bulunamadı</h2>

      <Link href="/" className="text-base border p-3 rounded-md">
        Anasayfa'ya Dön
      </Link>
    </div>
  );
};

export default NotFound;
