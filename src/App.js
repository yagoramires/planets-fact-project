// import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Main';
import Planetary from './components/Planetary/Planetary';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import mercury from './assets/planet-mercury.svg';
import mercuryInternal from './assets/planet-mercury-internal.svg';
import mercuryGeology from './assets/geology-mercury.png';
import venus from './assets/planet-venus.svg';
import venusInternal from './assets/planet-venus-internal.svg';
import venusGeology from './assets/geology-venus.png';
import earth from './assets/planet-earth.svg';
import earthInternal from './assets/planet-earth-internal.svg';
import earthGeology from './assets/geology-earth.png';
import mars from './assets/planet-mars.svg';
import marsInternal from './assets/planet-mars-internal.svg';
import marsGeology from './assets/geology-mars.png';
import jupiter from './assets/planet-jupiter.svg';
import jupiterInternal from './assets/planet-jupiter-internal.svg';
import jupiterGeology from './assets/geology-jupiter.png';
import saturn from './assets/planet-saturn.svg';
import saturnInternal from './assets/planet-saturn-internal.svg';
import saturnGeology from './assets/geology-saturn.png';
import uranus from './assets/planet-uranus.svg';
import uranusInternal from './assets/planet-uranus-internal.svg';
import uranusGeology from './assets/geology-uranus.png';
import neptune from './assets/planet-neptune.svg';
import neptuneInternal from './assets/planet-neptune-internal.svg';
import neptuneGeology from './assets/geology-neptune.png';

function App() {
  const [data, setData] = useState([]);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    setImageArray([
      {
        planet: mercury,
        planetInternal: mercuryInternal,
        planetGeology: mercuryGeology,
      },
      {
        planet: venus,
        planetInternal: venusInternal,
        planetGeology: venusGeology,
      },
      {
        planet: earth,
        planetInternal: earthInternal,
        planetGeology: earthGeology,
      },
      {
        planet: mars,
        planetInternal: marsInternal,
        planetGeology: marsGeology,
      },
      {
        planet: jupiter,
        planetInternal: jupiterInternal,
        planetGeology: jupiterGeology,
      },
      {
        planet: saturn,
        planetInternal: saturnInternal,
        planetGeology: saturnGeology,
      },
      {
        planet: uranus,
        planetInternal: uranusInternal,
        planetGeology: uranusGeology,
      },
      {
        planet: neptune,
        planetInternal: neptuneInternal,
        planetGeology: neptuneGeology,
      },
    ]);
  }, []);

  useEffect(() => {
    fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Planetary />} />
        <Route
          path='mercury'
          element={<Main data={data[0]} imageArray={imageArray[0]} />}
        />
        <Route
          path='venus'
          element={<Main data={data[1]} imageArray={imageArray[1]} />}
        />
        <Route
          path='earth'
          element={<Main data={data[2]} imageArray={imageArray[2]} />}
        />
        <Route
          path='mars'
          element={<Main data={data[3]} imageArray={imageArray[3]} />}
        />
        <Route
          path='jupiter'
          element={<Main data={data[4]} imageArray={imageArray[4]} />}
        />
        <Route
          path='saturn'
          element={<Main data={data[5]} imageArray={imageArray[5]} />}
        />
        <Route
          path='uranus'
          element={<Main data={data[6]} imageArray={imageArray[6]} />}
        />
        <Route
          path='neptune'
          element={<Main data={data[7]} imageArray={imageArray[7]} />}
        />
      </Routes>
    </div>
  );
}

export default App;
