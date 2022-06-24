import { useState } from 'react';
import Source from '../../assets/icon-source.svg';

import './Main.css';

const Main = ({ data, imageArray }) => {
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
      {data === undefined ? (
        <></>
      ) : (
        <main>
          <div className='main'>
            <div className='menu-wrapper'>
              <span
                className={`menu-wrapper__item ${
                  overview ? `${data.name.toLowerCase()}-active` : ''
                }`}
                onClick={handleClickOverview}
              >
                OVERVIEW
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

            {overview ? (
              <div className='planet-image'>
                <img src={imageArray.planet} alt='' />
              </div>
            ) : (
              <></>
            )}

            {structure ? (
              <div className='planet-image'>
                <img src={imageArray.planetInternal} alt='' />
              </div>
            ) : (
              <></>
            )}

            {surface ? (
              <div className='planet-image'>
                <div>
                  <img src={imageArray.planet} alt='' />
                  <img
                    src={imageArray.planetGeology}
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
                <h2>{data.name}</h2>
                <p>{data.overview.content}</p>
                <span>
                  Source :
                  <a
                    href={data.overview.source}
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
                <h2>{data.name}</h2>
                <p>{data.structure.content}</p>
                <span>
                  Source :
                  <a
                    href={data.structure.source}
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
                <h2>{data.name}</h2>
                <p>{data.geology.content}</p>
                <span>
                  Source :
                  <a
                    href={data.geology.source}
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
                  {data.rotation}
                </span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>
                  REVOLUTION TIME
                </span>
                <span className='cards-wrapper__card--info'>
                  {data.revolution}
                </span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>radius</span>
                <span className='cards-wrapper__card--info'>{data.radius}</span>
              </div>
              <div className='cards-wrapper__card'>
                <span className='cards-wrapper__card--label'>
                  AVERAGE TEMP.
                </span>
                <span className='cards-wrapper__card--info'>
                  {data.temperature}
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
