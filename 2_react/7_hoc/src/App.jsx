import FormModal from "./modals/FormModal";
import ThemeModal from "./modals/ThemeModal";
import WarnModal from "./modals/WarnModal";
import Modal from "./modals/Modal";

const App = () => {
  return (
    <div>
      <div className="d-flex gap-4">
        <FormModal />
        <ThemeModal />
        <WarnModal />
      </div>

      <div className="d-flex gap-4 mt-5 p-">
        <Modal title="Uyarı">
          <h1>İşlem Başarılı</h1>
        </Modal>

        <Modal title="Tema">
          <button className="rounded">Tema Değiş</button>
        </Modal>

        <Modal title="Giriş">
          <label>Email</label>
          <input type="text" className="form-control shadow" />
        </Modal>
      </div>
    </div>
  );
};

export default App;
