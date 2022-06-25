import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-earth.svg';
import planetInternal from './../assets/planet-earth-internal.svg';
import planetGeology from './../assets/geology-earth.png';

export default function Earth({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
