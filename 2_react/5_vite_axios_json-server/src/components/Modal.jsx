import { IoClose } from "react-icons/io5";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-inner">
        <div className="modal-head">
          <h2>Yeni Kişi Ekle</h2>
          <button>
            <IoClose />
          </button>
        </div>

        <form>
          <div>
            <label>İsim</label>
            <input type="text" />
          </div>
          <div>
            <label>Soyisim</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
