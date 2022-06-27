import React from 'react';
import { NavLink } from 'react-router-dom';
import Fb from '../../atoms/svg/fb';
import Ig from '../../atoms/svg/ig';
import In from '../../atoms/svg/in';
import Tw from '../../atoms/svg/tw';
import './style.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='ft-main'>
        <div className='ft-main-item'>
          <span className='ft-title'>Quick Links</span>
          <ul>
            <li>
              <NavLink to='/' activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/pricing' activeclassname='active'>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to='/features' activeclassname='active'>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeclassname='active'>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeclassname='active'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className='ft-main-item'>
          <span className='ft-title'>Legal</span>
          <ul>
            <li>
              <NavLink to='/login' activeclassname='active'>
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeclassname='active'>
                Terms & conditions
              </NavLink>
            </li>
          </ul>
        </div>
        
        <div className='ft-main-item'>
          <span className='ft-title'>Email Support</span>
          <ul>
            <li>
              <a href='mailto:help@flicbook.in'>
                help@flicbook.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='ft-social'>
      
        <ul className='ft-social-list'>
          <li>
            <span className='ft-title'>Connect with us:</span>
          </li>
          <li>
            <a href='https://infortts.com'>
              <Fb />
            </a>
          </li>
          <li>
            <a href='https://infortts.com'>
              <Tw />
            </a>
          </li>
          <li>
            <a href='https://infortts.com'>
              <In />
            </a>
          </li>
          <li>
            <a href='https://infortts.com'>
              <Ig />
            </a>
          </li>
        </ul>
      </div>
      <div className='ft-legal'>
        <ul className='ft-legal-list'>
          <li>&copy; Copyright 2022 </li>
          <li>
            <a href='https://infortts.com'>
              Fliqbook Pvt Ltd
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
