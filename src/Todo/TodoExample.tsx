import React, { createContext } from "react";
import { useContext, useReducer } from "react";
import TodoItem from "./TodoItem";
import { List, Typography } from "@mui/material";
import { todoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";

// Define the Todo type
export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

// Define a context
export const TodoContext = createContext({});
export const TodoDispatchContext = createContext({});

const initialTodos = [
  {
    id: 1,
    text: "Design: Material UI",
    complete: false,
    link: "https://mui.com/material-ui/all-components/",
  },
  {
    id: 2,
    text: "Design: Theming",
    complete: false,
    link: "https://zenoo.github.io/mui-theme-creator/\r\nhttps://m2.material.io/inline-tools/color/",
  },
  {
    id: 3,
    text: "Design: Apply customised theme",
    complete: false,
    link: "customTheme.ts",
  },
  {
    id: 4,
    text: "Dev: Counter",
    complete: false,
    link: "CountExample.jsx",
  },
  {
    id: 5,
    text: "Dev: Todo list",
    complete: false,
    link: "TodoExample.jsx",
  },
];

export const TodoExample = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: initialTodos });

  return (
    <TodoContext.Provider value={state.todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <Typography variant="h6">React Workshop</Typography>
        <TodoList></TodoList>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
