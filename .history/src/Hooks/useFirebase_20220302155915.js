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
    const googleSingIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
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