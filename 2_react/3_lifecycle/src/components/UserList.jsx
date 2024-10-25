import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState(null);

  //1) bileşenin ekrana gelme olayını izle
  useEffect(() => {
    //2) api'dan kullanıcı verilerini al
    fetch("https://dummyjson.com/users")
      //3) gelen json verisini js verisine çevir
      .then((res) => res.json())
      //4) api'dan gelen cevabı state'e aktar
      .then((data) => setUsers(data.users));
  }, []);

  //5) henüz api'dan cevap gelmediyse ekrana loader bas
  if (!users) return <h1>Yükleniyor...</h1>;

  //6) cevap geldiyse state'deki her bir veri için erkana kart bas
  return (
    <div className="d-flex flex-column align-items-center gap-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
