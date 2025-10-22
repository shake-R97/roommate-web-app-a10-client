import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase Config/firebase.init';


 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);

    // create new user
    const createUser = ( email , password)=> {
        setLoader(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    // sign in old user

    const signInUser = (email , password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    // google sign In

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth , googleProvider);
    }


    // signout user

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    // update user profile

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData);
    }


    // observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return ()=> {
            unsubscribe();
        }
    },[])


    const userData = {
        user,
        loader,
        googleSignIn,
        createUser,
        signInUser,
        signOutUser,
        setUser,
        updateUserProfile,
    }


    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;