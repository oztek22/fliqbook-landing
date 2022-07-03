import React from 'react';
import './style.scss';

function SectionWithImage(props) {
  return (
    <div className={`section-with-image ${props.rtl && 'rtl'}`} style={props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}}>
      {props.children}
      <div className='section-right'>
        {props.image}
      </div>
    </div>
  );
}

export default SectionWithImage;
