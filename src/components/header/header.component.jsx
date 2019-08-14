import React from 'react';
import { Link } from 'react-router-dom';

import crown from '../..//assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img src={crown} alt="Logo" />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='contact' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;