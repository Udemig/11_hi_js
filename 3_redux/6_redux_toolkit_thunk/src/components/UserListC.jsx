import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUsers } from "../redux/slices/classicSlice";

const UserListC = () => {
  const state = useSelector((store) => store.classicReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setUsers(res.data.users)))
      .catch((err) => dispatch(setError(err.message)));
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

export default UserListC;
