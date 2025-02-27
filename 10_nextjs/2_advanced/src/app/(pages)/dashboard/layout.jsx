// Slot olarak tanımlanan sayflar layout'a kendi isimleriyle prop olarak gelir

import Link from "next/link";

const Layout = ({ children, users, revenue, notification }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-10 mb-10">
        <Link href="/dashboard">Admin Paneli</Link>
        <Link href="/dashboard/settings">Panel Ayarları</Link>
      </div>

      <div className="w-full">
        <div className="box w-full"> {children}</div>

        <div className="flex gap-5 md:gap-10 mt-10">
          <div className="box flex-1">{users}</div>
          <div className="box flex-1">{revenue}</div>
        </div>

        <div className="box mt-10 w-full">{notification}</div>
      </div>
    </div>
  );
};

export default Layout;
