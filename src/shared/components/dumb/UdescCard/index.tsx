import { Card, Flex, Text } from '@mantine/core';
import Logo from '../../../images/logo-udesc-2.png';

function UdescCard() {
  return (
    <Card
      m="lg"
      w={600}
      shadow="xs"
      padding="lg"
      radius="md"
      withBorder
      display="flex"
      style={{ alignItems: 'center' }}
    >
      <Flex
        justify="center"
        direction="column"
        style={{
          flex: '1',
        }}
      >
        <img src={Logo} height={120} alt="Logo udesc" />
        <Text fw="bold" mt="md" ta="center" c="#7A7A7A" className="fontPrimary">
          Bem vindo ao UniProjetar
        </Text>
        <Text ta="center" c="#7A7A7A" className="fontPrimary">
          Seu sistema de gestão de projetos
        </Text>
      </Flex>
    </Card>
  );
}

export default UdescCard;
