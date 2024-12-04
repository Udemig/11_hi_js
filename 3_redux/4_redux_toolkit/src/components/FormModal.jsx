import { Button, Modal, Form } from "react-bootstrap";
import { inputs } from "../ constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/crudSlice";

const FormModal = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdata class'ından örnek al
    const formData = new FormData(e.target);

    // inputlardaki verileri nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a haber gönder
    if (!task) {
      dispatch(addTask(taskData));
    } else {
      // reducer'a güncelleneme haberi gönder
      dispatch(updateTask({ id: task.id, ...taskData }));
    }

    // modalı kapat
    handleClose();
  };

  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      className="text-black"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {task ? "Görevi Düzenle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-4"
        >
          {inputs.map((item) => (
            <Form.Group>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control
                defaultValue={task && task[item.name]}
                name={item.name}
                type={item.type}
                className="shadow"
                required
              />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
