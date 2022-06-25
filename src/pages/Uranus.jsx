import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-uranus.svg';
import planetInternal from './../assets/planet-uranus-internal.svg';
import planetGeology from './../assets/geology-uranus.png';

export default function Uranus({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
