import { Button, Grid2 as Grid, Stack, styled, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { addTag } from "../../redux/slices/tagsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import TagSelect from "./tag-select";
import { NoteData } from "../../types";
import { Link } from "react-router-dom";
import { Note } from "../../redux/slices/notesSlice";

const Label = styled("label")`
  font-size: 15px;
`;

interface Props {
  note?: Note;
  handleSubmit: (data: NoteData) => void;
}

const Form = ({ note, handleSubmit }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>(note?.title || "");
  const [markdown, setMarkdown] = useState<string>(note?.markdown || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);

  // form gönderilince
  const handleForm = () => {
    if (!title || !markdown || selectedTags.length < 1) {
      alert("Lütfen not içeriğini giriniz");
    }

    handleSubmit({ title, markdown, tags: selectedTags });
  };

  // yeni etiket ekleme butonuna tıklayınca
  const handleAddTag = (newTag: string) => {
    if (newTag.trim() === "") return;
    if (newTag.trim().length > 6) return;
    if (selectedTags.length === 5) return;
    if (selectedTags.includes(newTag)) return;

    dispatch(addTag(newTag));
    setSelectedTags([...selectedTags, newTag]);
  };

  // seçilen etiketi kaldır
  const handleDeleteTag = (value: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== value));
  };

  return (
    <form>
      <Stack spacing={7} sx={{ marginTop: "50px" }}>
        <Grid container spacing={5}>
          <Grid size={6}>
            <TextField label="Başlık" variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
          </Grid>

          <Grid size={6}>
            <TagSelect handleAddTag={handleAddTag} selectedTags={selectedTags} handleDeleteTag={handleDeleteTag} />
          </Grid>
        </Grid>

        <Stack gap={2}>
          <Label>İçerik (markdown destekler)</Label>
          <TextField fullWidth minRows={15} maxRows={100} multiline value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        </Stack>

        <Stack direction="row" justifyContent="end" spacing={5}>
          <Button component={Link} to=".." type="button" variant="contained" color="secondary" sx={{ minWidth: "100px" }}>
            Geri
          </Button>

          <Button onClick={handleForm} variant="contained" sx={{ minWidth: "100px" }}>
            Kaydet
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
