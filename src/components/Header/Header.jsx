import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalIcon from '../../assets/icon-hamburger.svg';
import Chevron from '../../assets/icon-chevron.svg';
import './Header.css';
import { TextWrapperContext } from '../contexts/TextWrapperContext';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { handleClickOverview, setLoad } = useContext(TextWrapperContext);

  const handleModal = () => {
    if (modalOpen) {
      setHidden(true)
      setTimeout(() => {
        setModalOpen(false)
      }, 500)
    } else {
      setHidden(false)
      setModalOpen(true)
    }
    setLoad(true)
  };

  const handleSelect = (e) => {
    const link = document.querySelectorAll('.menu__link');
    const li = document.querySelectorAll('.menu__li');

    link.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });

    li.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });

    e.target.classList.add('active');
    e.target.parentNode.classList.add('active');

    setLoad(true)
    handleClickOverview();
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
        <nav className={`modal__nav ${modalOpen ? '' : 'hidden'} ${hidden ? 'hideModal' : ''}`}>
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
            <Link
              to='/mercury'
              className='menu__link menu__link--mercury'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--mercury'>Mercury</li>
            </Link>
            <Link
              to='/venus'
              className='menu__link menu__link--venus'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--venus'>venus</li>
            </Link>
            <Link
              to='/earth'
              className='menu__link menu__link--earth'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--earth'>earth</li>
            </Link>
            <Link
              to='/mars'
              className='menu__link menu__link--mars'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--mars'>mars</li>
            </Link>
            <Link
              to='/jupiter'
              className='menu__link menu__link--jupiter'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--jupiter'>jupiter</li>
            </Link>
            <Link
              to='/saturn'
              className='menu__link menu__link--saturn'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--saturn'>saturn</li>
            </Link>
            <Link
              to='/uranus'
              className='menu__link menu__link--uranus'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--uranus'>uranus</li>
            </Link>
            <Link
              to='/neptune'
              className='menu__link  menu__link--neptune'
              onClick={handleSelect}
            >
              <li className='menu__li menu__li--neptune'>neptune</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
