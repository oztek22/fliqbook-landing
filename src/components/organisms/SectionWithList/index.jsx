import React from 'react';
import './style.css';

function SectionWithImage(props) {
  return (
    <div className='section'>
      {props.list.map(data => 
        <div className='list-item'>
          <div className='list-icon'>{data.icon}</div>
          <div className='list-title'>{data.title}</div>
          <div className='list-description'>{data.description}</div>
        </div>
      )}
    </div>
  );
}

export default SectionWithImage;
