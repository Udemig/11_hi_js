import { IoClose } from "react-icons/io5";
import Field from "./Field";
import axios from "axios";

// editItem propu varsa yani güncellenicek eleman propu doluysa modal güncellemem modunda null ise ekleme modunda çalışmalı
const Modal = ({ isModalOpen, close, setContacts, editItem }) => {
  console.log("DÜZNELENİCEK ELEMAN", editItem);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki bütün inputların veirileri bir nesne haline getir
    // formdata class'ından örnek al
    const formData = new FormData(e.target);

    // verileri önce diziye sonra nesne formatına çevirdik
    const newContact = Object.fromEntries(formData.entries());

    // eğer güncellenicek eleman yoksa
    if (!editItem) {
      // oluşturma isteği at
      axios
        .post("/contact", newContact)
        // api isteği başarılı olursa
        .then((res) => {
          // state'i güncelle (arayüze elemanın eklenmexini sağlar)
          setContacts((contacts) => [...contacts, res.data]);
        });
    } else {
      // güncellenicek eleman varsa güncelleme isteği at
      axios
        .put(`/contact/${editItem.id}`, newContact)
        // state'i güncelle
        .then((res) => {
          setContacts((contacts) =>
            contacts.map((contact) =>
              contact.id === editItem.id ? res.data : contact
            )
          );
        });
    }

    // modalı kapat
    close();
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-head">
            <h2>{editItem ? "Kişiyi Güncelle" : "Yeni Kişi Ekle"}</h2>
            <button onClick={close}>
              <IoClose />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <Field
              value={editItem?.name}
              label="İsim Soyisim"
              name="name"
            />

            <Field
              value={editItem?.position}
              label="Pozisyon"
              name="position"
            />
            <Field
              value={editItem?.company}
              label="Şirket"
              name="company"
            />
            <Field value={editItem?.phone} label="Telefon" name="phone" />
            <Field value={editItem?.email} label="Mail" name="email" />

            <div className="buttons">
              <button type="button" onClick={close}>
                Vazgeç
              </button>
              <button type="submit">Oluştur</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
