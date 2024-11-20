import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

// birden fazla state tutuğumuz seneryolarda nesne tercih ederiz
const initialState = {
  todos: [],
  isDarkTheme: true,
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // input içeriğine eriş
    const text = e.target[0].value;

    // reducer'a todo oluştuma eylemi gönder
    dispatch({ type: "CREATE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div className={`vh-100 container p-4 ${!state.isDarkTheme && "bg-white text-dark"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center my-5">TODO LİST</h1>
        <button onClick={() => dispatch({ type: "TOGGLE" })}>Tema Değiş</button>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-3 align-items-center ">
        <input className="form-control" type="text" />
        <button className="bg-success">Gönder</button>
      </form>

      <ul className="list-group my-5">
        {state.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
              className="btn btn-danger"
            >
              sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
