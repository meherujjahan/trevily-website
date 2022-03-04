import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const PrivateRoute = (children, ...rest) => {
    const {user: users, loading} = useAuth();
    if(loading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div>
        <Route
            {...rest}
            render={({ location }) =>
                users?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    </div>
    );
};

export default PrivateRoute;