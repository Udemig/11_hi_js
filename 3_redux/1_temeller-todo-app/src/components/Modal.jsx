import { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/actionTypes";
import api from "../api";
import { toast } from "react-toastify";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  // kaydet
  const handleClick = () => {
    // inputtaki değeri al
    const newText = inputRef.current.value;

    // -todo nesenesinin textini güncelle
    const updatedTodo = { ...todo, text: newText };

    api.patch(`/todos/${todo.id}`, { text: newText }).then(() => {
      // reducer'a text'in değiştiğini haber ver
      dispatch({ type: ActionTypes.UPDATE, payload: updatedTodo });

      // modalı kapat
      close();

      // bildirm gönder
      toast.success("todo güncellendi");
    });
  };

  return (
    <div className="modal d-block bg-blur" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered text-black">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button className="btn-close" onClick={close}></button>
          </div>

          <div className="modal-body">
            <div>
              <label>Yeni Başlık</label>
              <input
                defaultValue={todo.text}
                ref={inputRef}
                className="form-control shadow mt-2"
                type="text"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Vazgeç
            </button>

            <button onClick={handleClick} type="button" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
