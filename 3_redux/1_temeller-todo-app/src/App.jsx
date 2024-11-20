import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import api from "./api";
import { useDispatch } from "react-redux";
import ActionTypes from "./redux/actionTypes";

const App = () => {
  const dispatch = useDispatch();

  // proje açıldığında api'daki todoları al
  useEffect(() => {
    api
      .get("/todos")
      .then((res) => dispatch({ type: ActionTypes.SET, payload: res.data }));
  }, []);

  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          <span className="text-warning">Redux</span> CRUD
        </h2>

        <Form />
        <List />
      </div>
    </div>
  );
};

export default App;
