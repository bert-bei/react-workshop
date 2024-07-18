/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TodoDispatchContext } from "./TodoExample";
import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function TodoTextbox({ todo, setIsEditing }) {
  const [text, setText] = useState(todo?.text || "");
  const dispatch = useContext(TodoDispatchContext);

  const handleSave = () => {
    setText("");
    if (todo) {
      dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text } });
      setIsEditing(false);
    } else dispatch({ type: "ADD_TODO", payload: text });
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          placeholder="Todo task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Button onClick={handleSave}>Save</Button>
    </Stack>
  );
}

{
  /* 
  
  
  
  */
}
