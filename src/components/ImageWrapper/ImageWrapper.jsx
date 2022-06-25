import React, { useContext } from 'react';
import { TextWrapperContext } from '../contexts/TextWrapperContext';
import './ImageWrapper.css';

export default function ImageWrapper({ data, planetImg }) {
  const { overview, surface, structure } = useContext(TextWrapperContext);
  return (
    <>
      {overview ? (
        <div className='planet-image'>
          <img
            src={planetImg.planet}
            alt='planet'
            className={`size-${data.toLowerCase()}`}
          />
        </div>
      ) : (
        <></>
      )}

      {structure ? (
        <div className='planet-image'>
          <img
            src={planetImg.planetInternal}
            alt='planet-internal'
            className={`size-${data.toLowerCase()}`}
          />
        </div>
      ) : (
        <></>
      )}

      {surface ? (
        <div className='planet-image'>
          <div>
            <img
              src={planetImg.planet}
              alt='planet'
              className={`size-${data.toLowerCase()}`}
            />
            <img
              src={planetImg.planetGeology}
              alt='planet-geology'
              className='planet-image--geology'
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
