import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/svg/logo';
import Menu from '../../atoms/svg/menu';
import './style.scss';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='header-left'>
          <div className='logo-icon'>
            <Logo />
          </div>
          <div className='logo-title'>FLIQBOOK</div>
        </div>
        <div className='header-right'>
          <div
            className={`mobile-menu ${!isMenuVisible && 'active'}`}
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
            }}
          >
            <Menu />
          </div>
          <ul className={`link-list ${isMenuVisible && 'active'}`}>
            <li className='nav-link'>
              <NavLink to='/' activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/pricing' activeclassname='active'>
                Pricing
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/features' activeclassname='active'>
                Features
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/contact' activeclassname='active'>
                Contact Us
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/login' activeclassname='active'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
