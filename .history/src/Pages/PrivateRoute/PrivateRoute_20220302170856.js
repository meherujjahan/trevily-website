import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const PrivateRoute = (children, ...rest) => {
    const {users, loading} = useAuth();
    if(loading){
        return{ <div className="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}
    }
    return (
        <Route
        {...rest}
        render={({location})=> users.email ? children : <Redirect
        to={{
            pathname:"/login",
            state:{from:location}
        }}
        ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;