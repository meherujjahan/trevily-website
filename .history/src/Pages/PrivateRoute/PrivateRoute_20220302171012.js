import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const PrivateRoute = (children, ...rest) => {
    const {users, loading} = useAuth();
    if(loading){
        return <Spinner animation="border" variant="danger" />
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