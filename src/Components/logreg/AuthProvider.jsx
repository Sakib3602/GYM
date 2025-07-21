import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from './firebase.init';

import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [loading, setloading] = useState(true);

  // Sign up function
  const signUp = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
 const out = () => {
  setloading(true);
  return signOut(auth);
};


  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setPerson(user);
      setloading(false)
    });

    return () => unsubscribe();
  }, []);

  const info = {
    person,
    out,
    loading,
    signUp, // Expose signUp function
  };

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
