import { Flex, Menu, Text } from '@mantine/core';
import { IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

interface UserOptionsMenuProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

function UserOptionsMenu({ className }: UserOptionsMenuProps) {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Flex align="center" style={{ cursor: 'pointer' }}>
            <Text id="userText" c="white">
              Mike Wazowski
            </Text>
            <IoIosArrowUp size="20" color="white" />
          </Flex>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Perfil</Menu.Label>
          <Menu.Item>Configurações</Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={() => navigate('/login')}>Sair</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default styled(UserOptionsMenu)`
  #userText:hover {
    font-weight: bold !important;
  }
`;
