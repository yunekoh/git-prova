import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <Center h="80vh">
      <Stack align="center">
        <Heading>Oops, an error has occurred</Heading>
        <Button as={Link} to="/" colorScheme='whatsapp'>
          Home
        </Button>
      </Stack>
    </Center>
  );
};

export default PageError;
