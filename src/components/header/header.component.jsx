import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import Logo from '../../assets/hila-logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src={Logo}/>
            <input placeholder='search..' type='text' className='header_searchbar'/>
            <div className='header_user-info'>
                <Link to='/sign-in'>/ Sign-in</Link>
                <Link to='/newsletter'>/ Newsletter</Link>
            </div>
        </div>
    )
}

export default Header;