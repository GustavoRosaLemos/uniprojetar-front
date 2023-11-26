import { Container } from '@mantine/core';
import Header from '../../shared/components/dumb/Header';
import Dashboard from './Dashboard';

function MeasurementsPage() {
  return (
    <Container fluid p={0}>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default MeasurementsPage;
