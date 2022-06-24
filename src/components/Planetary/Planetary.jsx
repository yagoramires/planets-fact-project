import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/neptune'>
          <img src={Neptune} alt='' />
        </Link>
      </div>
      <div className='planetary__uranus'>
        <Link to='/uranus'>
          <img src={Uranus} alt='' />
        </Link>
      </div>
      <div className='planetary__saturn'>
        <Link to='/saturn'>
          <img src={Saturn} alt='' />
        </Link>
      </div>
      <div className='planetary__jupiter'>
        <Link to='/jupiter'>
          <img src={Jupiter} alt='' />
        </Link>
      </div>
      <div className='planetary__mars'>
        <Link to='/mars'>
          <img src={Mars} alt='' />
        </Link>
      </div>
      <div className='planetary__earth'>
        <Link to='/earth'>
          <img src={Earth} alt='' />
        </Link>
      </div>
      <div className='planetary__venus'>
        <Link to='/venus'>
          <img src={Venus} alt='' />
        </Link>
      </div>
      <div className='planetary__mercury'>
        <Link to='/mercury'>
          <img src={Mercury} alt='' />
        </Link>
        <div className='planetary__sun'></div>
      </div>
    </div>
  );
};

export default Planetary;
