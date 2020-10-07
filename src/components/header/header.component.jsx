import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import Logo from '../../assets/hila-logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img className='header_logo' src={Logo}/>
            <div className='header_user-info'>
                <Link to='/sign-in'>/ Sign-in</Link>
            </div>
        </header>
    )
}

export default Header;