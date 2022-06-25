import { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch('./data.json', {
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

    if (data) {
      setData(data);
    }
  }

  //   console.log(data);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
