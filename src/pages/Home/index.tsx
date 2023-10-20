import { Container, Flex, Grid } from '@mantine/core';
import Header from '../../shared/components/dumb/Header';
import IconCard from '../../shared/components/smart/IconCard';
import Document from '../../shared/images/document.png';
import Folder from '../../shared/images/folder.png';
import Graph from '../../shared/images/bar-graph.png';
import UdescCard from '../../shared/components/dumb/UdescCard';
import InitialScale from '../../shared/animations/InitialScale';

function HomePage() {
  return (
    <Container fluid p={0}>
      <Header />
      <Container fluid p="lg">
        <Flex justify="center">
          <InitialScale>
            <UdescCard />
          </InitialScale>
        </Flex>
        <Grid justify="center">
          <Grid.Col span="content">
            <InitialScale delay={0.2}>
              <IconCard
                text="Crie e controle seus projetos de pesquisa e extensão"
                alt="Projetos"
                img={Document}
                height="70"
              />
            </InitialScale>
          </Grid.Col>
          <Grid.Col span="content">
            <InitialScale delay={0.3}>
              <IconCard
                text="Gerencie os recursos de maneira organizada"
                alt="Pastas"
                img={Folder}
                height="70"
              />
            </InitialScale>
          </Grid.Col>
          <Grid.Col span="content">
            <InitialScale delay={0.4}>
              <IconCard
                text="Acompanhe gráficos e métricas"
                alt="Gráficos"
                img={Graph}
                height="70"
              />
            </InitialScale>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}

export default HomePage;
