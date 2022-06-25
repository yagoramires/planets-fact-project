import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-mercury.svg';
import planetInternal from './../assets/planet-mercury-internal.svg';
import planetGeology from './../assets/geology-mercury.png';

export default function Mercury({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
