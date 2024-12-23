import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al
    const room = e.target[0].value.toLowerCase();

    // seçili oda state'ini güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>

      <input type="text" placeholder="ör:haftasonu" required />

      <button>Odaya Gir</button>
      <button onClick={() => signOut(auth)}>Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
