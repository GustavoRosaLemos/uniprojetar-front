import { Container, Grid, Title } from '@mantine/core';
import Logo from '../../../images/logo-udesc.png';
import MenuOptions from './MenuOptions';
import UserOptions from './UserOptions';

function Header() {
  return (
    <Container fluid h={70} bg="#79AC78">
      <Grid h={70} align="stretch">
        <Grid.Col
          span="content"
          display="flex"
          style={{ alignItems: 'center' }}
        >
          <img src={Logo} height={70} alt="Logo udesc" />
        </Grid.Col>
        <Grid.Col
          span="content"
          display="flex"
          style={{ alignItems: 'center' }}
        >
          <Title c="white" fw="bold" size={25} order={1}>
            UniProjetar
          </Title>
        </Grid.Col>
        <Grid.Col
          span="content"
          display="flex"
          style={{ alignItems: 'center' }}
        >
          <MenuOptions />
        </Grid.Col>
        <Grid.Col
          span="auto"
          display="flex"
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <UserOptions />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Header;
