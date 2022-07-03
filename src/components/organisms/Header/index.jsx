import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/svg/logo';
import Menu from '../../atoms/svg/menu';
import './style.scss';

function Header(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const isBodyMargined = window.innerWidth > 1280;

  return (
    <div className={`header ${props.transparent && 'transparent'}`}>
      <div className='header-wrapper'>
        <div className='header-left'>
          <div className='logo-icon'>
            <Logo reverse={props.transparent} />
          </div>
          <div className='logo-title'>F L I Q B O O K</div>
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
      <div className={`border ${isBodyMargined && 'calculated-left'}`}  />
    </div>
  );
}

export default Header;
