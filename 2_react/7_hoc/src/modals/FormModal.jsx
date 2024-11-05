import { useState } from "react";

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <button className="rounded" onClick={open}>
        Modalı Göster
      </button>

      {isOpen && (
        <div className="modal d-block bg-black bg-opacity-50 text-black">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giriş Yapın</h5>
                <button onClick={close} className="close">
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form>
                  <label>Email</label>
                  <input className="form-control shadow" type="text" />
                  <label className="mt-3">Şifre</label>
                  <input className="form-control shadow" type="text" />
                </form>
              </div>

              <div className="modal-footer">
                <button onClick={close} className="btn btn-secondary">
                  Vazgeç
                </button>
                <button className="btn btn-primary">Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
