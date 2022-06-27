import React from 'react';
import './style.scss';

function SectionWithImage(props) {
  return (
    <div className='section section-with-list'>
      {props.list.map(data => 
        <div className='list-item' key={data.title}>
          <div className='list-icon'>{data.icon}</div>
          <div className='list-title'>{data.title}</div>
          <div className='list-description'>{data.description}</div>
        </div>
      )}
    </div>
  );
}

export default SectionWithImage;
