import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const {user, handleSignOut} = useFirebase()
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
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <CustomLink to={'/login'}>LOG IN</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;