import { Grid, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { MENU_OPTIONS } from '../../../../constants/menu';

interface MenuOptionsProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

function MenuOptions({ className }: MenuOptionsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Grid.Col
      className={className}
      span="auto"
      display="flex"
      style={{ alignItems: 'center' }}
    >
      <Grid gutter="xl">
        {MENU_OPTIONS.map((option) => (
          <Grid.Col
            key={option.text}
            span="auto"
            display="flex"
            style={{ alignItems: 'center' }}
          >
            <Text
              className="optionText"
              c="white"
              fw={location.pathname === option.path ? 'bold' : 'normal'}
              onClick={() => navigate(option.path)}
              style={{ cursor: 'pointer' }}
            >
              {option.text}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </Grid.Col>
  );
}

export default styled(MenuOptions)`
  .optionText:hover {
    color: red;
    font-weight: bold !important;
  }
`;
