import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../atoms/svg/logo';
import Menu from '../../atoms/svg/menu';
import './style.scss';

function Header(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [openedDropdown, setOpenedDropdown] = useState('');
  const [activeSubLinks, setAactiveSubLinks] = useState('');
  const location = useLocation();
  const dropdownElem = useRef(null);

  const isBodyMargined = window.innerWidth > 1280;

  useEffect(() => {
    const handleClick = (event) => {
      if (dropdownElem.current && !dropdownElem.current.contains(event.target)) {
        setOpenedDropdown('');
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [dropdownElem]);

  useEffect(() => {
    if (location.pathname.includes('features')) {
      setAactiveSubLinks('Features');
    }
  }, [location]);
  console.log(location);

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
              <NavLink className='menu-item' to='/' activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink className='menu-item' to='/pricing' activeclassname='active'>
                Pricing
              </NavLink>
            </li>
            <li
              className='nav-link dropdown'
              onClick={(e) => {
                e.preventDefault();
                if (openedDropdown === 'Features') setOpenedDropdown('');
                else setOpenedDropdown('Features');
              }}
              ref={dropdownElem}
            >
              <span className={`menu-item ${activeSubLinks === 'Features' && 'active'}`}>
                Features
                <svg xmlns='http://www.w3.org/2000/svg' width='16px' viewBox='0 0 16 16'>
                  <path fill='none' stroke='#343a40' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2 5l6 6 6-6' />
                </svg>
              </span>
              <ul className={`dropdown-list ${openedDropdown === 'Features' && 'open'}`}>
                <li className='list-item'>
                  <NavLink className='submenu-item' to='/features/1' activeclassname='active'>
                    Amazon to MTR GST-1
                  </NavLink>
                </li>
                <li className='list-item'>
                  <NavLink className='submenu-item' to='/features/2' activeclassname='active'>
                    Multiple Software Compatibility
                  </NavLink>
                </li>
                <li className='list-item'>
                  <NavLink className='submenu-item' to='/features/3' activeclassname='active'>
                    Sales and Tax Analytics
                  </NavLink>
                </li>
                <li className='list-item'>
                  <NavLink className='submenu-item' to='/features/4' activeclassname='active'>
                    Automated Financial Statements
                  </NavLink>
                </li>
                <li className='list-item'>
                  <NavLink className='submenu-item' to='/features/5' activeclassname='active'>
                    Advanced reconciliation and automation
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className='nav-link'>
              <NavLink className='menu-item' to='/contact' activeclassname='active'>
                Contact Us
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink className='menu-item' to='/login' activeclassname='active'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={`border ${isBodyMargined && 'calculated-left'}`} />
    </div>
  );
}

export default Header;
