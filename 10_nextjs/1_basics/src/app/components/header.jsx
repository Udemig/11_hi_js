import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b p-5 font-normal text-xl flex justify-between items-center">
      <h1 className="font-semibold">Next!</h1>

      <div className="flex justify-between gap-5 text-[17px]">
        <Link href="/">Anasayfa</Link>
        <Link href="/products">Ürünler</Link>
        <Link href="/profile">Profil</Link>
        <Link href="/login">Giriş Yap</Link>
      </div>
    </header>
  );
};

export default Header;
