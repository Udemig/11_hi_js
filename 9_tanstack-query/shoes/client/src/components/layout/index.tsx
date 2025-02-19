import { FC } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray px-4 md:px-8 lg:px-12 xl:px-14 py-8">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
