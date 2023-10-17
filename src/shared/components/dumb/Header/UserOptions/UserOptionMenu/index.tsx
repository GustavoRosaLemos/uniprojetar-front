import { Flex, Menu, Text } from '@mantine/core';
import { IoIosArrowUp } from 'react-icons/io';

function UserOptionsMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Flex align="center" style={{ cursor: 'pointer' }}>
          <Text c="white">Mike Wazowski</Text>
          <IoIosArrowUp size="20" color="white" />
        </Flex>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Perfil</Menu.Label>
        <Menu.Item>Configurações</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Sair</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default UserOptionsMenu;
