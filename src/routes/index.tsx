import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/DashBoard';
import List from '../pages/List';
import Employee from '../pages/Employee';
import Login from '../pages/Login';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
  return (
    <switch>
      <Route path="/" exact component={Login} />
      <PrivateRoutes path="/dashboard" component={Dashboard} />
      <PrivateRoutes path="/employee" component={Employee} role="ROLE_ADMIN" />
      <PrivateRoutes
        path="/list"
        component={List}
        role="ROLE_ADMIN,ROLE_USER"
      />
    </switch>
  )
}

export default Routes;
