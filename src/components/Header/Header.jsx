import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalIcon from '../../assets/icon-hamburger.svg';
import Chevron from '../../assets/icon-chevron.svg';
import './Header.css';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  return (
    <div className='header'>
      <span className='header__logo'>the planets</span>
      <div className='modal'>
        <img
          src={ModalIcon}
          alt=''
          className='modal__icon'
          onClick={handleModal}
        />
        <nav className={`modal__nav ${modalOpen ? '' : 'hidden'}`}>
          <ul className='modal__ul'>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mercury'></div>
                <Link to='/mercury'>Mercury</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--venus'></div>
                <Link to='/venus'>Venus</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--earth'></div>
                <Link to='/earth'>Earth</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--mars'></div>
                <Link to='/mars'>Mars</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--jupiter'></div>
                <Link to='/Jupiter'>Jupiter</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--saturn'></div>
                <Link to='/saturn'>Saturn</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--uranus'></div>
                <Link to='/uranus'>Uranus</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
            <li className='modal__li'>
              <span className='modal__text'>
                <div className='modal__circle modal__circle--neptune'></div>
                <Link to='/neptune'>Neptune</Link>
              </span>
              <img src={Chevron} alt='' className='modal__arrow' />
            </li>
          </ul>
        </nav>
      </div>
      <div className='menu'>
        <nav className='menu__nav'>
          <ul className='menu__ul'>
            <li className='menu__li menu__li--mercury'>
              <button>
                <Link to='/mercury' className='link'>
                  Mercury
                </Link>
              </button>
            </li>
            <li className='menu__li menu__li--venus'>
              <button>
                <Link to='/venus'>Venus</Link>
              </button>
            </li>
            <li className='menu__li menu__li--earth'>
              <button>
                <Link to='/earth'>Earth</Link>
              </button>
            </li>
            <li className='menu__li menu__li--mars'>
              <button>
                <Link to='/mars'>Mars</Link>
              </button>
            </li>
            <li className='menu__li menu__li--jupiter'>
              <button>
                <Link to='/jupiter'>Jupiter</Link>
              </button>
            </li>
            <li className='menu__li menu__li--saturn'>
              <button>
                <Link to='/saturn'>Saturn</Link>
              </button>
            </li>
            <li className='menu__li menu__li--uranus'>
              <button>
                <Link to='/uranus'>Uranus</Link>
              </button>
            </li>
            <li className='menu__li menu__li--neptune'>
              <button>
                <Link className='menu__li menu__li--neptune' to='/neptune'>
                  Neptune
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
