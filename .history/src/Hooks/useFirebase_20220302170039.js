import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    //const provider = new GoogleAuthProvider();
    //Manage user
    
    //Google LogIn
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user)
        }).finally(()=> setLoading(false))
    }

  //logout
  const logOut = () => {
      setLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).finally(() => setLoading(false))
    .catch((error) => {
      setError(error)
    });
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
         
        setUsers(user)
        } 
        else{
            setUsers({})
        }
            setLoading(false)
      });
      return ()=>unsubscribe; 
  },[auth])

    return (
       {
        logOut,
        signInWithGoogle,
        users,
        setUsers
       }
    );
};

export default useFirebase;