import { Container, Typography } from "@mui/material";
import { FC } from "react";
import Form from "../../components/form";
import { useDispatch } from "react-redux";
import { NoteData } from "../../types";
import { addNote } from "../../redux/slices/notesSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { PageContainer } from "../../components/container";

const Create: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (data: NoteData) => {
    dispatch(addNote(data));
    navigate("/");
  };

  return (
    <PageContainer>
      <Typography variant="h4" sx={{ marginBottom: "25px" }}>
        Yeni Not Oluştur
      </Typography>

      <Form handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Create;
