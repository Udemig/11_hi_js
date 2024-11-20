import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteTodo, toggleStatus } from "../redux/actions";
import api from "../api";
import { toast } from "react-toastify";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  // dispatch kurulum
  const dispatch = useDispatch();

  // sil
  const handleDelete = () => {
    api
      .delete(`/todos1232/${todo.id}`)
      .then(() => {
        dispatch(deleteTodo(todo.id));
        toast.info("todo listeden kaldırıldı");
      })
      .catch(() => {
        toast.error("silme işlemi başarısız");
      });
  };

  // durumu değiştir
  const handleStatus = () => {
    api
      .patch(`/todos/${todo.id}`, {
        is_done: !todo.is_done,
      })
      .then(() => {
        // reducer'a haber gönder
        dispatch(toggleStatus(todo));
      });
  };

  return (
    <div className="border rounded p-4 my-5 shadow-lg">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>

      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>

      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
