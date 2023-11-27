import { Container } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import Header from '../../shared/components/dumb/Header';
import ResourceList from './ResourceList';
import FilterBar from './FilterBar';
import Loading from '../../shared/components/dumb/Loading';
import {
  useGetResources,
  useResources,
  useSetFilters,
} from '../../store/hooks/resourceHooks';
import { ResourceFilters } from '../../shared/types/resource';

function ResourcesPage() {
  const [loading, setLoading] = useState(true);
  const setFilters = useSetFilters();
  const getResources = useGetResources();
  const resources = useResources();

  const fetchResources = useCallback((filters?: ResourceFilters) => {
    setLoading(true);
    setFilters(filters);
    getResources(filters).finally(() => setLoading(false));
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
