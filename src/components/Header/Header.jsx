import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalIcon from '../../assets/icon-hamburger.svg';
import Chevron from '../../assets/icon-chevron.svg';
import './Header.css';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
    handleSelect();
  };

  const handleSelect = (e) => {
    const item = document.querySelectorAll('.menu__li');

    item.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });

    if (e.classList.contains('menu__li')) {
      e.target.classList.add('active');
    }

    if (e.classList.contains('link')) {
      e.target.parentNode.classList.add('active');
    }
  };

  return (
    <div className='header'>
      <Link to='/' className='header__logo' onClick={handleSelect}>
        the planets
      </Link>
      <div className='modal'>
        <img
          src={ModalIcon}
          alt=''
          className='modal__icon'
          onClick={handleModal}
        />
        <nav className={`modal__nav ${modalOpen ? '' : 'hidden'}`}>
          <ul className='modal__ul' onClick={handleModal}>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mercury'></div>
                <Link to='/mercury' onClick={handleModal}>
                  Mercury
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--venus'></div>
                <Link to='/venus' onClick={handleModal}>
                  Venus
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--earth'></div>
                <Link to='/earth' className='link' onClick={handleModal}>
                  Earth
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mars'></div>
                <Link to='/mars' onClick={handleModal}>
                  Mars
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--jupiter'></div>
                <Link to='/Jupiter' onClick={handleModal}>
                  Jupiter
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--saturn'></div>
                <Link to='/saturn' onClick={handleModal}>
                  Saturn
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--uranus'></div>
                <Link to='/uranus' onClick={handleModal}>
                  Uranus
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--neptune'></div>
                <Link to='/neptune' onClick={handleModal}>
                  Neptune
                </Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
          </ul>
        </nav>
      </div>
      <div className='menu'>
        <nav className='menu__nav'>
          <ul className='menu__ul'>
            <li className={`menu__li menu__li--mercury`} onClick={handleSelect}>
              <Link to='/mercury'>Mercury</Link>
            </li>
            <li className={`menu__li menu__li--venus`} onClick={handleSelect}>
              <Link to='/venus'>Venus</Link>
            </li>
            <li className={`menu__li menu__li--earth`} onClick={handleSelect}>
              <Link to='/earth'>Earth</Link>
            </li>
            <li className={`menu__li menu__li--mars`} onClick={handleSelect}>
              <Link to='/mars'>Mars</Link>
            </li>
            <li className={`menu__li menu__li--jupiter`} onClick={handleSelect}>
              <Link to='/jupiter'>Jupiter</Link>
            </li>
            <li className={`menu__li menu__li--saturn`} onClick={handleSelect}>
              <Link to='/saturn'>Saturn</Link>
            </li>
            <li className={`menu__li menu__li--uranus`} onClick={handleSelect}>
              <Link to='/uranus'>Uranus</Link>
            </li>
            <li
              className={`menu__li menu__li--neptune `}
              onClick={handleSelect}
            >
              <Link to='/neptune'>Neptune</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
