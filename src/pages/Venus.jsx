import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-venus.svg';
import planetInternal from './../assets/planet-venus-internal.svg';
import planetGeology from './../assets/geology-venus.png';

export default function Venus({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
