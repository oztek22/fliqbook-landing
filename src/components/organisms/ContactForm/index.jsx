import React from 'react';
import Button from '../../atoms/button';
import './style.scss';

function ContactForm(props) {
  return (
    <div className='contact-form section-with-image' style={{ backgroundColor: '#E6F5EA' }}>
      <div className='section-left'>{props.image}</div>
      <div className='section-right'>
        <span className='title'> YOUR TIME IS VALUABLE </span>
        <span className='subtitle'> Get answers quick</span>
        <span className='content'>
          <div className='email'>
            <div>Email</div>
            <input type='email' name='email' placeholder='example@email.com' />
          </div>
          <div className='query'>
            <div>Please tell us your query</div>
            <textarea name='query' rows={5} placeholder='Type your message or query' />
          </div>
        </span>
        <div className='button-container'>
          <Button
            label='SUBMIT'
            onClick={() => {
              console.log('Submiting data');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
