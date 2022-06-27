import React from 'react';
import Button from '../../atoms/button';
import './style.scss';

function SectionWithImage(props) {
  return (
    <div className={`section-with-image ${props.rtl && 'rtl'}`} style={props.backgroundColor ? {backgroundColor: props.backgroundColor} : {}}>
      <div className='section-left'>
        <span className='tagLiner'> {props.tagline} </span>
        <span className='header-text'> {props.header}</span>
        <span className='subheader'> {props.subheader}</span>
        <span className='description'> {props.description}</span>
        {props.button && <Button label={props.button.label} onClick={props.button.onClick} key='SectionWithImage'></Button>}
      </div>
      <div className='section-right'>
        {props.image}
      </div>
    </div>
  );
}

export default SectionWithImage;
