import Link from "next/link";
import { getRecipes } from "../service";
import { kissing } from "../layout";
import NavLink from "./navLink";

const Header = async () => {
  // tarfiler sayfasında attığımız api istepini header componentında da attık
  // next.js api isteğini cache'lediği için istek gerçekten api'a gitmedi ilk api isteğinden gelen cache'deki cevap kullanıldı
  const { recipes } = await getRecipes();

  return (
    <header style={kissing.style} className="p-4 text-xl border flex justify-between">
      <h1>Mutfağın!</h1>

      <nav className="flex gap-5">
        <Link href="/recipes">Tarifler({recipes.length})</Link>

        <NavLink path="/hakkimizda" label="Hakkımızda" />
        <NavLink path="/iletisim" label="İletişim" />
      </nav>
    </header>
  );
};

export default Header;
