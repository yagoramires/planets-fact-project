import Source from '../../assets/icon-source.svg';
import Mercury from '../../assets/planet-mercury.svg';
import MercuryInternal from '../../assets/planet-mercury-internal.svg';
import MercuryGeology from '../../assets/geology-mercury.png';
import { useState } from 'react';

import './Main.css';

const Main = ({ data }) => {
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  const handleClickOverview = () => {
    setOverview(true);
    setStructure(false);
    setSurface(false);
  };

  const handleClickStucture = () => {
    setOverview(false);
    setSurface(false);
    setStructure(true);
  };

  const handleClickSurface = () => {
    setOverview(false);
    setStructure(false);
    setSurface(true);
  };

  return (
    <>
      {data.length === 0 ? (
        <></>
      ) : (
        <main>
          <div className='main'>
            <div className='menu-wrapper'>
              <span
                className={`menu-wrapper__item ${
                  overview ? 'mercury-active' : ''
                }`}
                onClick={handleClickOverview}
              >
                OVERVIEW
              </span>
              <span
                className={`menu-wrapper__item ${
                  structure ? 'mercury-active' : ''
                }`}
                onClick={handleClickStucture}
              >
                Structure
              </span>
              <span
                className={`menu-wrapper__item ${
                  surface ? 'mercury-active' : ''
                }`}
                onClick={handleClickSurface}
              >
                Surface
              </span>
            </div>

            {overview ? (
              <div className='planet-image'>
                <img src={Mercury} alt='' />
              </div>
            ) : (
              <></>
            )}

            {structure ? (
              <div className='planet-image'>
                <img src={MercuryInternal} alt='' />
              </div>
            ) : (
              <></>
            )}

            {surface ? (
              <div className='planet-image'>
                <div>
                  <img src={Mercury} alt='' />
                  <img
                    src={MercuryGeology}
                    alt=''
                    className='planet-image--geology'
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            {overview ? (
              <div className='text-wrapper'>
                <h2>{data[0].name}</h2>
                <p>{data[0].overview.content}</p>
                <span>
                  Source :
                  <a
                    href={data[0].overview.source}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Wikipedia <img src={Source} alt='' />
                  </a>
                </span>
              </div>
            ) : (
              <></>
            )}

            {structure ? (
              <div className='text-wrapper'>
                <h2>{data[0].name}</h2>
                <p>{data[0].structure.content}</p>
                <span>
                  Source :
                  <a
                    href={data[0].structure.source}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Wikipedia <img src={Source} alt='' />
                  </a>
                </span>
              </div>
            ) : (
              <></>
            )}

            {surface ? (
              <div className='text-wrapper'>
                <h2>{data[0].name}</h2>
                <p>{data[0].geology.content}</p>
                <span>
                  Source :
                  <a
                    href={data[0].geology.source}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Wikipedia <img src={Source} alt='' />
                  </a>
                </span>
              </div>
            ) : (
              <></>
            )}

            <div className='cards-wrapper'>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>
                  ROTATION TIME
                </span>
                <span className='cards-wrapper__card--info'>
                  {data[0].rotation}
                </span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>
                  REVOLUTION TIME
                </span>
                <span className='cards-wrapper__card--info'>
                  {data[0].revolution}
                </span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>radius</span>
                <span className='cards-wrapper__card--info'>
                  {data[0].radius}
                </span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>
                  AVERAGE TEMP.
                </span>
                <span className='cards-wrapper__card--info'>
                  {data[0].temperature}
                </span>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
