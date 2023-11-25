import { Provider } from 'react-redux';
import AuthenticatedRoutes from './authenticatedRoutes';
// import NonAuthenticatedRoutes from './nonAuthenticatedRoutes';
import store from '../store';

function RouterSwitch() {
  return (
    <Provider store={store}>
      {/* <NonAuthenticatedRoutes /> */}
      <AuthenticatedRoutes />
    </Provider>
  );
}

export default RouterSwitch;
