import { Paper, Text } from '@mantine/core';

interface DashDataProps {
  title: string;
  value: string;
}

function DashData({ title, value }: DashDataProps) {
  return (
    <Paper shadow="xs" p="xl">
      <Text fw={600} c="#BDBDBD">
        {title}
      </Text>
      <Text c="#7a7a7a" fw={600}>
        {value}
      </Text>
    </Paper>
  );
}

export default DashData;
