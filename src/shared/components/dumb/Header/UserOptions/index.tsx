import { Avatar, Flex } from '@mantine/core';
import UserOptionsMenu from './UserOptionMenu';
import { useSession } from '../../../../../store/hooks/sessionHooks';
import { getInitials } from '../../../../../utils';

function UserOptions() {
  const session = useSession();

  return (
    <Flex align="center">
      <Avatar mr={5} color="white" size="45" radius="xl">
        {getInitials(session?.user.fullName)}
      </Avatar>
      <UserOptionsMenu />
    </Flex>
  );
}

export default UserOptions;
