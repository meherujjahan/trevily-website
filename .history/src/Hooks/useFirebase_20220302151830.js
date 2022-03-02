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
        return signInWithPopup(auth, provider)

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
