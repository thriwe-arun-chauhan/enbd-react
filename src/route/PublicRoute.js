import React, {useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';


import OuterHeader from '../templates/outer/OuterHeader';
import OuterFooter from '../templates/outer/OuterFooter';
import Loader from '../templates/Loader';


import { connect } from 'react-redux';
import { setConfig } from '../services/reducer/actions/Actions';

const PublicRoute = ({ component: Component, ...rest }) => {
  
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  let isLoggedIn = localStorage.getItem('user_id');
  
  return (
    <Route {...rest} render={props => !isLoggedIn
      ? (

        <div id="page" className="site">
          {/* <Loader /> */}
          <OuterHeader />
          <Component key={props.match.params.id || 'empty'} {...props} />
          <OuterFooter />
        </div>
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
export default connect(mapStateToProps, mapDistchToProps)(PublicRoute);
