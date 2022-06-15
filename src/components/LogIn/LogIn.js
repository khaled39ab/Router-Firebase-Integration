import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './LogIn.css'
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div className='logIn-container p-4 m-4 w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Log In</h2>
            <div className='mx-auto btn-sec'>
                <Button onClick={signInWithGoogle} variant="primary" type="submit">
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