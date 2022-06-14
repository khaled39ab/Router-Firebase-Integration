import React from 'react';
import logo from '../../logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
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
                <CustomLink to={'/login'}>LOG IN</CustomLink>
            </div>
        </nav>
    );
};

export default Header;