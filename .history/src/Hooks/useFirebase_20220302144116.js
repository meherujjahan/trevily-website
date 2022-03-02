import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const useFirebase = () => {

    const auth = getAuth();

    //Google LogIn
    const googleSingOut ()=>{
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

       }
    );
};

export default useFirebase;