import React from 'react';
import Slider from '../../molecules/slider';
import './style.scss';

function SectionWithSliderImage(props) {
  return (
    <div className={`section-with-slider section-with-image ${props.rtl && 'rtl'}`} style={props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}}>
      {props.children}
      <div className='section-right'>
        <Slider list={props.list} />
      </div>
    </div>
  );
}

export default SectionWithSliderImage;
