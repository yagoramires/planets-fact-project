import React from 'react';
import ModalIcon from '../../assets/icon-hamburger.svg';
import Chevron from '../../assets/icon-chevron.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <span className='header__logo'>the planets</span>
      <div className='header__modal'>
        <img src={ModalIcon} alt='' className='header__modal--icon' />
        <nav className='header__modal-header__nav hidden'>
          <ul className='header__modal-header__ul'>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--mercury'></div>
                Mercury
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--venus'></div>
                Venus
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--earth'></div>
                Earth
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--mars'></div>
                Mars
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--jupiter'></div>
                Jupiter
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--saturn'></div>
                Saturn
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--uranus'></div>
                Uranus
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
            <li className='header__modal-header__li'>
              <span className='header__modal__text'>
                <div className='header__modal__icon header__modal__icon--neptune'></div>
                Neptune
              </span>
              <img src={Chevron} alt='' className='header__modal--chevron' />
            </li>
          </ul>
        </nav>
      </div>
      <div className='header__menu'>
        <nav className='header__menu-header__nav'>
          <ul className='header__menu-header__ul'>
            <li className='header__menu-header__li mercury'><button>Mercury</button></li>
            <li className='header__menu-header__li venus'><button>Venus</button></li>
            <li className='header__menu-header__li earth'><button>Earth</button></li>
            <li className='header__menu-header__li mars'><button>Mars</button></li>
            <li className='header__menu-header__li jupiter'><button>Jupiter</button></li>
            <li className='header__menu-header__li saturn'><button>Saturn</button></li>
            <li className='header__menu-header__li uranus'><button>Uranus</button></li>
            <li className='header__menu-header__li neptune'><button>Neptune</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
