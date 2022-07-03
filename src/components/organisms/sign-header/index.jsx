import React from 'react';
import Logo from '../../atoms/svg/logo.jsx';
import './style.scss';

const SignHeader = () => (
  <div className='sign-header'>
    <div className='container'>
      <Logo />
      <span className='logo-title'>F L I Q B O O K</span>
    </div>
  </div>
);

export default SignHeader;
