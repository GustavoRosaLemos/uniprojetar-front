import { Route, Routes, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import ProjectsPage from '../pages/Projects';
import ResourcesPage from '../pages/Resources';
import MeasurementsPage from '../pages/Measurements';
import HomePage from '../pages/Home';
import { useSession } from '../store/hooks/sessionHooks';
import UserPage from '../pages/UserPage';

function AuthenticatedRoutes() {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      notifications.show({
        message: 'Favor realize o login novamente.',
        title: 'Login inválido!',
      });
      navigate('/login');
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/recursos" element={<ResourcesPage />} />
      <Route path="/metricas" element={<MeasurementsPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
