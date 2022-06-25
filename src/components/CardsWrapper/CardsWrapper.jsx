import React from 'react';
import './CardsWrapper.css';

export default function CardsWrapper({ data }) {
  return (
    <>
      <div className='cards-wrapper cardTransition'>
        <div className='cards-wrapper__card'>
          <span className='cards-wrapper__card--label'>ROTATION TIME</span>
          <span className='cards-wrapper__card--info'>{data.rotation}</span>
        </div>
        <div className='cards-wrapper__card'>
          <span className='cards-wrapper__card--label'>REVOLUTION TIME</span>
          <span className='cards-wrapper__card--info'>{data.revolution}</span>
        </div>
        <div className='cards-wrapper__card'>
          <span className='cards-wrapper__card--label'>radius</span>
          <span className='cards-wrapper__card--info'>{data.radius}</span>
        </div>
        <div className='cards-wrapper__card'>
          <span className='cards-wrapper__card--label'>AVERAGE TEMP.</span>
          <span className='cards-wrapper__card--info'>{data.temperature}</span>
        </div>
      </div>
    </>
  );
}
