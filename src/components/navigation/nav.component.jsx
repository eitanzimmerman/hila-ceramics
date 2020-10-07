import React from 'react';
import { Link } from 'react-router-dom';

import './nav.styles.scss';

const Nav = () => (
    <nav className='navigation'>
        <ul className='navigation_side-bar'>
            <Link to='/' className='navigation_side-bar_item'>Home</Link>
            <Link  to='/shop' className='navigation_side-bar_item'>Shop</Link>
            <Link  to='/blog' className='navigation_side-bar_item'>Gallery</Link>
        </ul>
        
    </nav>
)

export default Nav;