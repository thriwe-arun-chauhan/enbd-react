import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import InnerHeader from '../templates/inner/InnerHeader';
import InnerFooter from '../templates/inner/InnerFooter';
import WidgetList from '../components/WidgetList';
import Loader from '../templates/Loader';

import SweetAlert from 'react-bootstrap-sweetalert';

import { connect } from 'react-redux';
import { setConfig } from '../services/reducer/actions/Actions';

const PrivateRoute = ({ component: Component, ...rest }) => {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const onConfirm = () => {

  }

  const onCancel = () => {

  }


  let IsLoggedIn = localStorage.getItem(process.env.REACT_APP_TOKEN_ACCESS_NAME);
  return (
    <Route {...rest} render={props => IsLoggedIn
      ? (
        <>
          <SweetAlert success title="Good job!" onConfirm={onConfirm} onCancel={onCancel}>
            You clicked the button!
          </SweetAlert>
          
          <WidgetList />
          <div id="page" className="site">
            {/* <Loader /> */}
            <InnerHeader />
            <Component key={props.match.params.id || 'empty'} {...props} />
            <InnerFooter />
          </div>
        </>
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    } />
  )
}

const mapStateToProps = state => ({

});
const mapDistchToProps = dispatch => ({
  setConfigHandler: data => dispatch(setConfig(data))
});
export default connect(mapStateToProps, mapDistchToProps)(PrivateRoute);
