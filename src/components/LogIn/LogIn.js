import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './LogIn.css'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const LogIn = () => {
    // const { signInWithGoogle } = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const from = location.state.from.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() =>{
            navigate (from, {replace: true});
        })
    }
    return (
        <div className='logIn-container p-4 m-4 w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Log In</h2>
            <div className='mx-auto btn-sec'>
                <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
                    Log in with Google
                </Button>
                <br />
                <Button variant="primary" type="submit">
                    Log in with Github
                </Button>
            </div>
        </div>
    );
};

export default LogIn;