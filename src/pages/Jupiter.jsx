import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-jupiter.svg';
import planetInternal from './../assets/planet-jupiter-internal.svg';
import planetGeology from './../assets/geology-jupiter.png';

export default function Jupiter({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
