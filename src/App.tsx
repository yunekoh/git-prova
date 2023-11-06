import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TypeUser } from "./types/types";

const users: TypeUser[] = [
  {
    name: "Luca Reverberi",
    path: "reverberi",
  },
];

function App() {
  return (
    <Stack>
      <SimpleGrid columns={[1, 4]} gap="1rem" p="1rem">
        {users.map((user) => (
          <Button as={Link} to={`/${user.path}`} key={user.path}>
            {user.name}
          </Button>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default App;
