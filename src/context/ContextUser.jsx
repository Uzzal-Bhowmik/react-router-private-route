import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';

// create context
export const AuthContext = createContext("default-value");

// firebase initialization
const auth = getAuth(app);


const ContextUser = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    // ------------------ Email-Pass section ------------------

    // sign up with email-password
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email-pass
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // --------------------------------------------------------



    // ----------------- Google Sign In Section -------------------

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // ------------------------------------------------------------



    // --------------- Sign Out -------------------

    const authSignOut = () => {
        return signOut(auth);
    }

    // --------------------------------------------------------



    // get signed in users on state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])
    // --------------------------------------------------------



    //  Setting Context Data
    const authInfo = { user, handleSignUp, handleSignIn, authSignOut, googleSignIn, isLoading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextUser;