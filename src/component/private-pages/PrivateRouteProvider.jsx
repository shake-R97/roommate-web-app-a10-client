import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouteProvider = ({children}) => {

    const {user} = use(AuthContext);

    if(!user){
        return <Navigate to={'/signin'}></Navigate>
    }

    return children;
};

export default PrivateRouteProvider;