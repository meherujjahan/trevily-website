import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

export initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();

    //Google LogIn
    const googleSingIn ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

  //logout
  const logOut () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
    return (
       {
        logOut,
        googleSingIn
       }
    );
};

export default useFirebase;