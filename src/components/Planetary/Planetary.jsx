import React from 'react';
import Neptune from '../../assets/planet-neptune.svg';

import './Planetary.css';

const Planetary = () => {
  return (
    <div className='planetary'>
      <div className='planetary__neptune'>
        <img src={Neptune} alt='' />
        <div className='planetary__uranus'>
          <img src={Neptune} alt='' />
          <div className='planetary__saturn'>
            <img src={Neptune} alt='' />
            <div className='planetary__jupiter'>
              <img src={Neptune} alt='' />
              <div className='planetary__mars'>
                <img src={Neptune} alt='' />
                <div className='planetary__earth'>
                <img src={Neptune} alt='' />              <div className='planetary__venus'>
                <img src={Neptune} alt='' />
                <div className='planetary__mercury'>
                <img src={Neptune} alt='' />
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planetary;
