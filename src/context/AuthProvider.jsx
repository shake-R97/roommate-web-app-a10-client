import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase Config/firebase.init';

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    // create new user
    const createUser = ( email , password)=> {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    // sign in old user

    const signInUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // signout user

    const signOutUser = () => {
        return signOut(auth)
    }


    // observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=> {
            unsubscribe();
        }
    },[])


    const userData = {
        user,
        createUser,
        signInUser,
        signOutUser,
    }


    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;