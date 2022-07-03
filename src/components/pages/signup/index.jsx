import React, { Component } from 'react';
import SectionForm from '../../molecules/section-form';
import SignHeader from '../../organisms/sign-header';
import SectionWithSlider from '../../organisms/SectionWithSliderImage';

class Signup extends Component {
  render() {
    return (
      <div>
        <SignHeader></SignHeader>
        <SectionWithSlider list={[
          {id: 1, title: '1. Lorem ipsum lorem ipsum lorem ipsum', description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum', img: require('../../atoms/images/signup-1.png')},
          {id: 2, title: '2. Lorem ipsum lorem ipsum lorem ipsum', description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum', img: require('../../atoms/images/signup-1.png')},
          {id: 3, title: '3. Lorem ipsum lorem ipsum lorem ipsum', description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum', img: require('../../atoms/images/signup-1.png')}
        ]}>
          <SectionForm
            title='Let`s Get You Started'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              cras consequat venenatis'
            isSignup={true}
          />
        </SectionWithSlider>
      </div>
    );
  }
}

export default Signup;
