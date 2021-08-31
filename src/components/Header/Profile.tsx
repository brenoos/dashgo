import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Breno Oliveira</Text>
        <Text color="gray.300" fontSize="small">
          breno@foxbox.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Breno Oliveira"
        src="https://github.com/brenoos.png"
      />
    </Flex>
  );
}
