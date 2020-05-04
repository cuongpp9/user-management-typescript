import { Route, Redirect } from 'react-router-dom';
import React from 'react';
// import { getJWT } from '../../localStorage';

interface PrivateRouteProps {
    component: any,
}

const PrivateRoute = (props: PrivateRouteProps) => {
    
    const { component: Component, ...rest } = props;
      return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('isLogin') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            //   state: {
            //     isNeedLogin: true,
            //     currentUrl: rest.location.pathname,
            //   },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;