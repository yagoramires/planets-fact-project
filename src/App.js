import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TextWrapperProvider } from './components/contexts/TextWrapperContext';

import Header from './components/Header/Header';
import Planetary from './components/Planetary/Planetary';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';

import './App.css';

function App() {
  const [data, setData] = useState([]);

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
      <TextWrapperProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Planetary />} />
          <Route path='mercury' element={<Mercury data={data[0]} />} />
          <Route path='venus' element={<Venus data={data[1]} />} />
          <Route path='earth' element={<Earth data={data[2]} />} />
          <Route path='mars' element={<Mars data={data[3]} />} />
          <Route path='jupiter' element={<Jupiter data={data[4]} />} />
          <Route path='saturn' element={<Saturn data={data[5]} />} />
          <Route path='uranus' element={<Uranus data={data[6]} />} />
          <Route path='neptune' element={<Neptune data={data[7]} />} />
        </Routes>
      </TextWrapperProvider>
    </div>
  );
}

export default App;
