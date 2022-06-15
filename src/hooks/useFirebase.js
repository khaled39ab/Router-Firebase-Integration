import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(res=>{
            setUser(res.user)
        })
        .catch(err =>console.error(err))
    }
    return {user, signInWithGoogle}
}

export default useFirebase;