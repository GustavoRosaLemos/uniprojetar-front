import { Avatar, Flex } from '@mantine/core';
import UserOptionsMenu from './UserOptionMenu';

function UserOptions() {
  return (
    <Flex align="center">
      <Avatar mr={5} color="white" size="45" radius="xl">
        MW
      </Avatar>
      <UserOptionsMenu />
    </Flex>
  );
}

export default UserOptions;
