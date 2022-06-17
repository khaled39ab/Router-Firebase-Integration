import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import logo from '../../logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const auth = getAuth(app)

const Header = () => {
    // const {user, handleSignOut} = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <nav>
            <div className='logo-name'>
                <img src={logo} alt="" />
                <h2>Router Firebase Integration</h2>
            </div>
            <div className='custom-link'>
                <CustomLink to={'/'}>HOME</CustomLink>
                <CustomLink to={'/reviews'}>REVIEWS</CustomLink>
                <CustomLink to={'/dashboard'}>DASHBOARD</CustomLink>
                <CustomLink to={'/about'}>ABOUT</CustomLink>
                <h5 style={{color:'white'}}>{user?.displayName && user.displayName}</h5>
                {
                    user?.uid ? 
                    <button onClick={() => signOut(auth)}>Sign Out</button> :
                    <CustomLink to={'/login'}>LOG IN</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;