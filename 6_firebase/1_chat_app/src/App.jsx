import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanıcının yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState(false);

  // hangi odaya girildi state'İ
  const [room, setRoom] = useState(null);

  // sayfa yenilediğinde kullanıcı oturum bilgisini al
  useEffect(() => {
    // kullanıcnın oturum durumu her değiştiğinde güncel bigileri alıp getirir
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // yetkisi yoksa: login page'i ekrana bas
  if (!isAuth) return <LoginPage />;

  // yetkisi varsa: oda seçme sayfasını ekrana bas
  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
