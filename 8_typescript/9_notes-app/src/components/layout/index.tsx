import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { FC } from "react";

// hem detail hem de edit sayfalarında url'deki parametreye göre note'un veirlerini alsaydık kod tekrarına düşücektik bundan dolayı her iksiini ortak noktası olan layout component'ında bu işlemi yapıcaz ve prop olarak detail ve edit sayfalarına göndericez
const Layout: FC = () => {
  // store'daki note verilerine eriş
  const { notes } = useSelector((state: RootState) => state.notes);

  // url'den note'un id'sini al
  const { id } = useParams();

  // mevcut notların arasından id'si bilenen notu bul
  const found = notes.find((note) => note.id === id);

  // eğer bulamazsak anasayfaya yönlendir
  if (!found) {
    return <Navigate to="/" replace />;
  }

  // alt route elementini ekrana bas ve prop olarak notu gönder
  return <Outlet context={found} />;
};

export default Layout;
