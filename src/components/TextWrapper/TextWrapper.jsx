import React, { useContext } from 'react';

import { TextWrapperContext } from '../contexts/TextWrapperContext';

import './TextWrapper.css';
import Source from '../../assets/icon-source.svg';

export default function TextWrapper({ data }) {
  const { overview, structure, surface, onLoad, active, setActive, activeChange, setActiveChange } = useContext(TextWrapperContext);

  const handleActive = () => {
    setActiveChange(false)
    !onLoad ? setActive(true) : setActive(false);
  } 

  return (
    <>
      {overview ? (
        <div className={`text-wrapper ${onLoad? 'onLoad' : ''} ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`} onLoad={handleActive}>
          <h2>{data.name}</h2>
          <p>{data.overview.content}</p>
          <span>
            Source :
            <a href={data.overview.source} target='_blank' rel='noreferrer'>
              Wikipedia <img src={Source} alt='' />
            </a>
          </span>
        </div>
      ) : (
        <></>
      )}

      {structure ? (
        <div className={`text-wrapper ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`} onLoad={handleActive}>
          <h2>{data.name}</h2>
          <p>{data.structure.content}</p>
          <span>
            Source :
            <a href={data.structure.source} target='_blank' rel='noreferrer'>
              Wikipedia <img src={Source} alt='' />
            </a>
          </span>
        </div>
      ) : (
        <></>
      )}

      {surface ? (
        <div className={`text-wrapper ${active? 'active' : ''} ${activeChange? 'activeChange' : ''}`} onLoad={handleActive}>
          <h2>{data.name}</h2>
          <p>{data.geology.content}</p>
          <span>
            Source :
            <a href={data.geology.source} target='_blank' rel='noreferrer'>
              Wikipedia <img src={Source} alt='' />
            </a>
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
