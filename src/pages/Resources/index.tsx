import { Container } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import Header from '../../shared/components/dumb/Header';
import ResourceList from './ResourceList';
import FilterBar from './FilterBar';
import Loading from '../../shared/components/dumb/Loading';
import { useGetResources, useResources } from '../../store/hooks/resourceHooks';

function ResourcesPage() {
  const [loading, setLoading] = useState(true);
  const getResources = useGetResources();
  const resources = useResources();

  const fetchResources = useCallback(() => {
    getResources().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchResources();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container fluid p={0}>
      <Header />
      <FilterBar fetchResources={fetchResources} />
      <ResourceList resources={resources} fetchResources={fetchResources} />
    </Container>
  );
}

export default ResourcesPage;
