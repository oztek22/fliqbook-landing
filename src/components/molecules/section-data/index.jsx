import React from 'react';
import Button from '../../atoms/button';
import './style.scss';

function SectionData(props) {
  return (
    <div className='section-data'>
      <span className='tagLiner'> {props.tagline} </span>
      <span className='header-text'> {props.header}</span>
      <span className='subheader'> {props.subheader}</span>
      <span className='description'> {props.description}</span>
      {props.button && <Button label={props.button.label} onClick={props.button.onClick} key='SectionWithImage'></Button>}
    </div>
  );
}

export default SectionData;
