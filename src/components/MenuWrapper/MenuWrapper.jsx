import React, { useContext } from 'react';
import { TextWrapperContext } from '../contexts/TextWrapperContext';

import './MenuWrapper.css';

export default function MenuWrapper({ data }) {
  const {
    handleClickOverview,
    handleClickStucture,
    handleClickSurface,
    overview,
    surface,
    structure,
  } = useContext(TextWrapperContext);

  return (
    <>
      <div className='menu-wrapper'>
        <span
          className={`menu-wrapper__item ${
            overview ? `${data.name.toLowerCase()}-active` : ''
          }`}
          onClick={handleClickOverview}
        >
          Overview
        </span>
        <span
          className={`menu-wrapper__item ${
            structure ? `${data.name.toLowerCase()}-active` : ''
          }`}
          onClick={handleClickStucture}
        >
          Structure
        </span>
        <span
          className={`menu-wrapper__item ${
            surface ? `${data.name.toLowerCase()}-active` : ''
          }`}
          onClick={handleClickSurface}
        >
          Surface
        </span>
      </div>
    </>
  );
}
