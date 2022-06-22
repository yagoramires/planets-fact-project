import React from 'react';
import Source from '../../assets/icon-source.svg';
import Mercury from '../../assets/planet-mercury.svg';

import './Main.css';

const Main = () => {
  return (
    <main>
      <div className='main-container'>
        <div className='main-container__nav'>
          <span className='main-container__nav__item'>OVERVIEW</span>
          <span className='main-container__nav__item'>Structure</span>
          <span className='main-container__nav__item'>Surface </span>
        </div>
        <div className='main-container__planet-image'>
          <img src={Mercury} alt='' />
        </div>
        <div className='main-container__planet-text'>
          <h2>Mercury</h2>
          <p>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <span>
            Source :
            <a
              href='https://en.wikipedia.org/'
              target='_blank'
              rel='noreferrer'
            >
              Wikipedia <img src={Source} alt='' />
            </a>
          </span>
        </div>
        <div className='main-container__cards-container'>
          <div className='main-container__cards-container__card'>
            <span className='main-container__cards-container__card--label'>
              ROTATION TIME
            </span>
            <span className='main-container__cards-container__card--info'>
              58.6 days
            </span>
          </div>
          <div className='main-container__cards-container__card'>
            <span className='main-container__cards-container__card--label'>
              REVOLUTION TIME
            </span>
            <span className='main-container__cards-container__card--info'>
              87.97 days
            </span>
          </div>
          <div className='main-container__cards-container__card'>
            <span className='main-container__cards-container__card--label'>
              radius
            </span>
            <span className='main-container__cards-container__card--info'>
              2,439.7 km
            </span>
          </div>
          <div className='main-container__cards-container__card'>
            <span className='main-container__cards-container__card--label'>
              AVERAGE TEMP.
            </span>
            <span className='main-container__cards-container__card--info'>
              430°c
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
