import React, { Fragment, useEffect, useState } from 'react';
import './style.scss';

function Slider(props) {
  const [active, setActive] = useState(props.list[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActive(props.list[++index]);
      if (index === 2) index = -1;
    }, 2000);
  
    return () => clearInterval(interval);
  }, [props.list]);

  return (
    <Fragment>
      <div className='slider-wrapper'>
        <img src={active.img} alt="slideImage" />
        <h3>{active.title}</h3>
        <p>{active.description} </p>
      </div>
      <div className='pagination'>
        {props.list.map((data) => (
          <div key={data.id} className={`pagination-button ${active === data && 'active'}`} onClick={() => setActive(data)}></div>
        ))}
      </div>
    </Fragment>
  );
}

export default Slider;
