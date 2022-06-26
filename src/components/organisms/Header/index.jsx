import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../atoms/svg/logo';
import './style.css';

class Header extends Component {
  render() {
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
            <ul className='link-list'>
              <li  className='nav-link'><NavLink to='/' activeclassname="active">Home</NavLink></li>
              <li  className='nav-link'><NavLink to='/pricing' activeclassname="active">Pricing</NavLink></li>
              <li  className='nav-link'><NavLink to='/features' activeclassname="active">Features</NavLink></li>
              <li  className='nav-link'><NavLink to='/contact' activeclassname="active">Contact Us</NavLink></li>
              <li  className='nav-link'><NavLink to='/login' activeclassname="active">Login</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
