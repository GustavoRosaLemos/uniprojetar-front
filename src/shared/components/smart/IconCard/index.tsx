import { Card, Flex, Text } from '@mantine/core';

interface IconCardProps {
  text: string;
  img: string;
  // eslint-disable-next-line react/require-default-props
  height?: string;
  alt: string;
}

function IconCard({ text, img, height, alt }: IconCardProps) {
  return (
    <Card
      m="lg"
      w={320}
      h={220}
      shadow="xs"
      padding="lg"
      radius="md"
      withBorder
      display="flex"
      style={{ alignItems: 'center' }}
    >
      <Flex
        align="center"
        justify="center"
        direction="column"
        style={{
          flex: '1',
        }}
      >
        <div>
          <img src={img} height={height} alt={alt} />
        </div>
        <Text fw="bold" mt="md" ta="center" c="#7A7A7A" className="fontPrimary">
          {text}
        </Text>
      </Flex>
    </Card>
  );
}

export default IconCard;
