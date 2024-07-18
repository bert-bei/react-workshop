import { useEffect, useReducer } from "react";
import { TodoExample } from "./TodoExample";
import { CountExample } from "./CountExample";
import { Box } from "@mui/system";
import { Card, CardContent } from "@mui/material";

const ReactExample = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <TodoExample />
        </CardContent>
      </Card>
      {/* <Card>
        <CardContent>
          <CountExample />
        </CardContent>
      </Card>       */}
    </Box>
  );
};

export default ReactExample;
