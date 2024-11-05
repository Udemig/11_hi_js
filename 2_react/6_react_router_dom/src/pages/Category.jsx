import { NavLink, Outlet } from "react-router-dom";

// Eğer parent route'a bir element verirsek url'de alt route'a gitsek bile parent route'un elementi ekrana gelir.

// Parent route elementi içerisnde alt route'un elementini ekran basmak istersek Outlet bileşenini kullanıyoruz

const Category = () => {
  const role = "admin";

  if (role !== "admin") {
    return "Bu sayfaya erişim yetkini yok";
  }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4 fs-4">
        <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>

      {/* Alt route'ın bileşenini çağır */}
      <Outlet />
    </div>
  );
};

export default Category;
