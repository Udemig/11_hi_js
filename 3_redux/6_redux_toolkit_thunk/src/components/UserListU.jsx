import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

const UserListU = () => {
  const state = useSelector((store) => store.updatedReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        state.users.map((user) => (
          <div>
            <img src={user.image} />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </div>
        ))
      )}
    </div>
  );
};

export default UserListU;
