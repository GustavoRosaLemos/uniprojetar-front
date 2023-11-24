import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HealthPage from '../pages/Health';
import store from '../store';
import HomePage from '../pages/Home';
import ProjectsPage from '../pages/Projects';
import ResourcesPage from '../pages/Resources';
import MeasurementsPage from '../pages/Measurements';
import LoginPage from '../pages/Login';

function RouterSwitch() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/metricas" element={<MeasurementsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Provider>
  );
}

export default RouterSwitch;
