import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader';

const PrivateRouteProvider = ({children}) => {

    const {user , loader} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loader){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate state={location?.pathname} to={'/signin'}></Navigate>
    }

    return children;
};

export default PrivateRouteProvider;