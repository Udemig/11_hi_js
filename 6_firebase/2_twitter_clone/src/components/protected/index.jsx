import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";

const Protected = () => {
  // kullanıcı oturumunun state'i
  const [user, setUser] = useState(undefined);

  // kullanıcının oturum verilelerini al
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => unsub();
  }, []);

  // oturum verileri gelene kadar yükleniyor bas
  if (user === undefined) {
    return <PageLoader />;
  }

  // eğer kullanının oturumu kapalı veya epostası doğrulanmamışsa logine yönlendir
  if (user === null || user?.emailVerified === false) {
    //  epostası doğrulanmamışsa bildirim gönder
    if (user?.emailVerified === false)
      toast.info("Lütfen mail adresinizi doğrulayınız");

    return <Navigate to="/" replace />;
  }

  // oturumu açık ve epostası doğrulanmışsa sayfayı göster
  // ilgili sayfaya user veirlerini prop olarak gönder
  return <Outlet context={user} />;
};

export default Protected;
