import React, { Fragment } from 'react';
import Select from 'react-select';
import Button from '../../atoms/button';
import './style.scss';

function SectionForm(props) {
  return (
    <div className='section-form'>
      <div className='title'>{props.title}</div>
      <div className='description'>{props.description}</div>
      <div className='wrapper'>
        {props.isSignup && (
          <Fragment>
            <div className='input-group'>
              <Select
                options={[
                  { value: 'accountant', label: 'I am an... Accountant' },
                  { value: 'owner', label: 'I am an... owner' },
                ]}
                placeholder='Ex: I am an... Accountant'
                classNamePrefix='select'
              />
            </div>
            <div className='input-group'>
              <input className='input' type='number' placeholder='Whatsapp number (Only Indian Users)' />
            </div>
          </Fragment>
        )}
        <div className='input-group'>
          <input className='input' type='email' placeholder='Email id' />
        </div>
        <div className='input-group'>
          <input className='input' type='password' placeholder='Password' />
        </div>

        {props.isSignup && (
          <Fragment>
            <div className='input-group'>
              <input className='input' type='password' placeholder='Confirm password' />
            </div>
            <div className='input-group'>
              <Select
                options={[
                  { value: 'Gujarat', label: 'Gujarat' },
                  { value: 'Rajasthan', label: 'Rajasthan' },
                ]}
                placeholder='Which state are you from?'
                classNamePrefix='select'
              />
            </div>
          </Fragment>
        )}
        <div className='input-group'>
          <Button label={props.isSignup ? 'REGISTER' : 'LOGIN'} />
        </div>
      </div>
    </div>
  );
}

export default SectionForm;
