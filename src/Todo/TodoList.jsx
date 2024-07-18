import { useContext } from "react";
import { TodoContext } from "./TodoExample";
import TodoItem from "./TodoItem";
import { Grid, List } from "@mui/material";
import TodoTextbox from "./TodoTextbox";

export const TodoList = () => {
  const todos = useContext(TodoContext);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {/* <TodoTextbox /> */}
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
