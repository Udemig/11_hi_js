const UserCard = ({ user }) => {
  return (
    <div
      style={{ maxWidth: 400 }}
      className="card p-4 shadow d-flex flex-column gap-2 shadow"
    >
      <div className="d-flex justify-content-center">
        <img width={100} src={user.image} />
      </div>

      <p>
        <span className="badge bg-danger me-2">İsim</span>
        <span>{user.firstName}</span>
      </p>
      <p>
        <span className="badge bg-danger me-2">Soyisim</span>
        <span>{user.lastName}</span>
      </p>
      <p>
        <span className="badge bg-danger me-2">Yaş</span>
        <span>{user.age}</span>
      </p>
      <p>
        <span className="badge bg-danger me-2">Email</span>
        <span>{user.email}</span>
      </p>
      <p>
        <span className="badge bg-danger me-2">Şehir</span>
        <span>{user.address.city}</span>
      </p>
    </div>
  );
};

export default UserCard;
