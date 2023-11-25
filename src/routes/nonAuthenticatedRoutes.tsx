import { Route, Routes } from 'react-router';
import HealthPage from '../pages/Health';
import LoginPage from '../pages/Login';

function NonAuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/health" element={<HealthPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default NonAuthenticatedRoutes;
