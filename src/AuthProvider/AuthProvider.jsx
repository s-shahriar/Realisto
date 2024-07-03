import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext({
    user: null,
    loading: true,
    createUser: () => {},
    signIn: () => {},
    updateUser: () => {},
    logOut: () => {},
    googleLogin: () => {},
    githubLogin: () => {},
    setLoading: () => {},
  });

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    setLoading(true)
    setUser(null);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateUser = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    loading,
    createUser,
    signIn,
    updateUser,
    logOut,
    googleLogin,
    githubLogin,
    setLoading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthProvider;