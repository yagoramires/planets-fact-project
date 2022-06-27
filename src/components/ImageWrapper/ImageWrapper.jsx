import React, { useContext } from 'react';
import { TextWrapperContext } from '../contexts/TextWrapperContext';
import './ImageWrapper.css';

export default function ImageWrapper({ data, planetImg }) {
  const { overview, surface, structure, onLoad, active, setActive, activeChange, setActiveChange } = useContext(TextWrapperContext);


  const handleActive = () => {
    setActiveChange(false)
    !onLoad ? setActive(true) : setActive(false);
  } 

  return (
    <>
      {overview ? (
        <div className={`planet-image ${onLoad? 'onLoad' : ''} ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`}  onLoad={handleActive}>
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
        <div className={`planet-image ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`} onLoad={handleActive}>
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
        <div className={`planet-image ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`} onLoad={handleActive}> 
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
