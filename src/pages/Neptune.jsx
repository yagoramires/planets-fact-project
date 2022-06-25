import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-neptune.svg';
import planetInternal from './../assets/planet-neptune-internal.svg';
import planetGeology from './../assets/geology-neptune.png';

export default function Neptune({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
