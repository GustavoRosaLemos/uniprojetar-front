import { Grid, Text } from '@mantine/core';
import { MENU_OPTIONS } from '../../../../constants/menu';

function MenuOptions() {
  return (
    <Grid.Col span="auto" display="flex" style={{ alignItems: 'center' }}>
      <Grid gutter="xl">
        {MENU_OPTIONS.map((option) => (
          <Grid.Col
            key={option.text}
            span="auto"
            display="flex"
            style={{ alignItems: 'center' }}
          >
            <Text c="white">{option.text}</Text>
          </Grid.Col>
        ))}
      </Grid>
    </Grid.Col>
  );
}

export default MenuOptions;
