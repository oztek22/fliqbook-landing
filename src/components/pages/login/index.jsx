import React, { Component } from 'react';
import SectionForm from '../../molecules/section-form';
import SignHeader from '../../organisms/sign-header';
import SectionWithImage from '../../organisms/SectionWithImage';

class Signin extends Component {
  render() {
    return (
      <div>
        <SignHeader></SignHeader>
        <SectionWithImage image={<img src={require('../../atoms/images/signin.png')} alt='not found' />} >
          <SectionForm
            title='Welcome!'
            description='Sign in and start your gst filing!'
            isSignup={false}
          />
        </SectionWithImage>
      </div>
    );
  }
}

export default Signin;
