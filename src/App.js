import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setConfig, setUserData } from './services/reducer/actions/Actions';

import { routes } from './route/RouterConfigs';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';


function App(props) {

  return (
    <div className="App">

      <div className="common-bg">
        <div className="wrapper">

          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              {routes.map((route, index) => (
                route.private==true?
                <PrivateRoute key={index} path={route.path} component={route.component} exact={route.exact} />
                :
                <PublicRoute key={index} path={route.path} component={route.component} exact={route.exact} />
              ))}
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  //data:state.cardItems
});
const mapDispatchToProps = dispatch => ({
  setConfigHandler: data => dispatch(setConfig(data)),
  setUserDataHandler: data => dispatch(setUserData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App)
