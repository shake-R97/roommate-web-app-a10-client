import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase Config/firebase.init';

const AuthProvider = ({children}) => {



    // create new user
    const createUser = ( email , password)=> {
        return createUserWithEmailAndPassword(auth , email , password)
    }


    const userData = {
        createUser,
    }


    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;