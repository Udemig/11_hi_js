// HOC
// Farklı component veya jsx elementlerini kapsayan ve onları prop olarak alan componentlera Higher Order Component denir
// Kapsadığı elemanların children propu erişilebilir

import { useState } from "react";

const Modal = ({ children, title }) => {
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
                <h5 className="modal-title">{title}</h5>
                <button onClick={close} className="close">
                  <span>&times;</span>
                </button>
              </div>

              <div className="modal-body">{children}</div>

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

export default Modal;
