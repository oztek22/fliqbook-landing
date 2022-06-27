import React from 'react';
import Button from '../../atoms/button';
import './style.scss';

function ContactForm(props) {
  return (
    <div className='contact-form section-header' dir='rtl' style={{backgroundColor: '#E6F5EA'}}>
      <div className='section-left'>
        <span className='section-tagLiner'> YOUR TIME IS VALUABLE </span>
        <span className='section-header-text'> Get answers quick</span>
        <span className='section-subheader'> {props.subheader}</span>
        <span className='section-description'> {props.description}</span>
        {props.button && <Button label='SUBMIT' onClick={props.button.onClick}></Button>}
      </div>
      <div className='section-right'>
        {props.image}
      </div>
    </div>
  );
}

export default ContactForm;
