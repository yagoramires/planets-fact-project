import React from 'react';
import Main from '../components/Main/Main';

import planet from './../assets/planet-saturn.svg';
import planetInternal from './../assets/planet-saturn-internal.svg';
import planetGeology from './../assets/geology-saturn.png';

export default function Saturn({ data }) {
  const planetImages = {
    planet: planet,
    planetInternal: planetInternal,
    planetGeology: planetGeology,
  };

  return <Main data={data} planetImg={planetImages} />;
}
