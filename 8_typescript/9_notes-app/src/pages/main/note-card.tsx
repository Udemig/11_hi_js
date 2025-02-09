import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Note } from "../../redux/slices/notesSlice";
import { Link } from "react-router-dom";
import { memo } from "react";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Card variant="elevation">
      <CardActionArea component={Link} to={`/note/${note.id}`}>
        <CardContent>
          <Typography variant="h5" textAlign="center">
            {note.title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            gap={1}
            flexWrap="wrap"
            marginTop={2}
          >
            {note.tags.map((tag) => (
              <Chip label={tag} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(NoteCard);
