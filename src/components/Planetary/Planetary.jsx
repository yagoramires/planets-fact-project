import React from 'react';
import Neptune from '../../assets/planet-neptune.svg';
import Uranus from '../../assets/planet-uranus.svg';
import Saturn from '../../assets/planet-saturn.svg';
import Jupiter from '../../assets/planet-jupiter.svg';
import Mars from '../../assets/planet-mars.svg';
import Earth from '../../assets/planet-earth.svg';
import Venus from '../../assets/planet-venus.svg';
import Mercury from '../../assets/planet-mercury.svg';

import './Planetary.css';

const Planetary = () => {
  return (
    <div className='planetary'>
      <div className='planetary__neptune'>
        <img src={Neptune} alt='' />
        <div className='planetary__uranus'>
          <img src={Uranus} alt='' />
          <div className='planetary__saturn'>
            <img src={Saturn} alt='' />
            <div className='planetary__jupiter'>
              <img src={Jupiter} alt='' />
              <div className='planetary__mars'>
                <img src={Mars} alt='' />
                <div className='planetary__earth'>
                  <img src={Earth} alt='' />{' '}
                  <div className='planetary__venus'>
                    <img src={Venus} alt='' />
                    <div className='planetary__mercury'>
                      <img src={Mercury} alt='' />{' '}
                      <div className='planetary__sun'></div>
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
