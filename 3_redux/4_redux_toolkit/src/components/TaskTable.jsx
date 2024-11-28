import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import FormModal from "./FormModal";
import TableRow from "./TableRow";

const TaskTable = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((store) => store.crudReducer);

  const handleDelete = (id) => {
    if (!confirm("Silmek istediğinizden emin misniz?")) return;

    dispatch(deleteTask(id));
  };

  return (
    <Table variant="dark" striped hover bordered responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TableRow key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
