import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 54 }} >

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Create"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create employee"
          />

        </Scene>

      </Router>
  );
};

export default RouterComponent;