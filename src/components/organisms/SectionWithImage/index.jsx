import React from 'react';
import SectionData from '../../molecules/section-data';
import './style.scss';

function SectionWithImage(props) {
  return (
    <div className={`section-with-image ${props.rtl && 'rtl'}`} style={props.backgroundColor ? {backgroundColor: props.backgroundColor} : {}}>
      <SectionData {...props} />
      <div className='section-right'>
        {props.image}
      </div>
    </div>
  );
}

export default SectionWithImage;
