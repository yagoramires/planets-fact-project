import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-mars.svg';
import planetInternal from './../assets/planet-mars-internal.svg';
import planetGeology from './../assets/geology-mars.png';

export default function Mars({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
