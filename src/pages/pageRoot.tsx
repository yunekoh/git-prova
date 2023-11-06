import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const PageRoot = () => {
  return (
    <Stack>
      <Flex w="full" p="1rem" bgColor="cyan.500" color="white">
        <Heading as={Link} to="/">
          fullstackioni
        </Heading>
      </Flex>
      <Box p="1rem">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default PageRoot;
