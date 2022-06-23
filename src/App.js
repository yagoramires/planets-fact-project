// import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Main';
import Planetary from './components/Planetary/Planetary';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
      <Header />
      <Routes>
        <Route path='/' element={<Planetary />} />
        <Route path='mercury' element={<Main data={data} />} />
        <Route path='venus' element={<Main />} />
        <Route path='earth' element={<Main />} />
        <Route path='mars' element={<Main />} />
        <Route path='jupiter' element={<Main />} />
        <Route path='saturn' element={<Main />} />
        <Route path='uranus' element={<Main />} />
        <Route path='neptune' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
