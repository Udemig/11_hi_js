import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserPicker = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);

  //id state'i her değiştiğinde bir fonksiyon çalıştır
  useEffect(() => {
    // id'deye göre api isteğini at
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      {!user ? <h1>Yükleniyor</h1> : <UserCard user={user} />}

      <div className="d-flex justify-content-center gap-4 mt-5">
        <button
          disabled={id === 1}
          onClick={() => setId(id - 1)}
          className="btn btn-secondary"
        >
          Geri
        </button>

        <span className="fs-1 lead">{id}</span>

        <button onClick={() => setId(id + 1)} className="btn btn-success">
          İleri
        </button>
      </div>
    </div>
  );
};

export default UserPicker;
