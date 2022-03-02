import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    //Manage user
    
    //Google LogIn
    const googleSingIn = ()=>{
        setLoading(true)
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
  const logOut = () => {
      setLoading(true)
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).finally(() => setLoading(false))
    .catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          const uid = currentUser.uid;
        setUser(currentUser)
        } 
            setLoading(false)
      });
      return ()=>unsubscribe; 
  },[auth])

    return (
       {
        logOut,
        googleSingIn,
        user,
        setUser
       }
    );
};

export default useFirebase;