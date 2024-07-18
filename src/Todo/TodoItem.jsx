/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TodoDispatchContext } from "./TodoExample";
import TodoTextbox from "./TodoTextbox";

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoDispatchContext);

  // const [isEditing, setIsEditing] = useState(false);

  const handleToggleComplete = () => {
    dispatch({ type: "COMPLETE_TODO", payload: todo.id });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <ListItem>
      <ListItemButton onClick={handleToggleComplete} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.complete}
            tabIndex={-1}
            disableRipple
            aria-label="completed"
          />
        </ListItemIcon>
      </ListItemButton>
      <ListItem>
        <ListItemText primary={todo.text} secondary={todo.link} />
      </ListItem>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;

{
  /* {isEditing ? (
          <TodoTextbox todo={todo} setIsEditing={setIsEditing} />
        ) : (
          <ListItemText primary={todo.text} secondary={todo.link} />
        )} */
}
{
  /* <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => setIsEditing(!isEditing)}
        >
          <EditIcon />
        </IconButton> */
}
