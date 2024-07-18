import {
  Badge,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useEffect, useReducer } from "react";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const CountExample = () => {
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });

  useEffect(() => {
    CountSideEffect(state.count);
  }, [state]);

  return (
    <List>
      <ListItem>
        <Typography variant="h6">Count Example</Typography>
      </ListItem>
      <ListItem>
        <Badge badgeContent={state.count} color="primary">
          <MailIcon color="action" />
        </Badge>
      </ListItem>
      <ListItem>
        <ButtonGroup size="small">
          <Button onClick={() => dispatch({ type: "INCREMENT" })}>
            <AddIcon></AddIcon>
          </Button>
          <Button onClick={() => dispatch({ type: "DECREMENT" })}>
            <RemoveIcon></RemoveIcon>
          </Button>
        </ButtonGroup>
      </ListItem>
    </List>
  );
};

const CountReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CountSideEffect = (count) => {
  document.title = `Count ${count}`;
};
