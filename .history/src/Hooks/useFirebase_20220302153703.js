import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    //google sign in
    const signInWithGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
         
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

    };
    // sign out
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .finally(() => setLoading(false))
            .catch((err) => {
                setError(err.message);
            });

    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);



    return {
        user,
         setUser, 
         error, setError, 
         signInWithGoogle, 
         logOut, 
         setLoading, 
         loading
    }
}
export default useFirebase;
