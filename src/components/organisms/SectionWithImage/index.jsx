import React from 'react';
import Button from '../../atoms/button';
import './style.css';

function SectionWithImage(props) {
  return (
    <div className='section-header' dir={props.rtl ? 'rtl' : 'auto'} style={props.backgroundColor ? {backgroundColor: props.backgroundColor} : {}}>
      <div className='section-left'>
        <span className='section-tagLiner'> {props.tagline} </span>
        <span className='section-header-text'> {props.header}</span>
        <span className='section-subheader'> {props.subheader}</span>
        <span className='section-description'> {props.description}</span>
        {props.button && <Button label={props.button.label} onClick={props.button.onClick}></Button>}
      </div>
      <div className='section-right'>
        {props.image}
      </div>
    </div>
  );
}

export default SectionWithImage;
