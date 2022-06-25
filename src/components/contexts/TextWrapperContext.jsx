import { useState, createContext } from 'react';

export const TextWrapperContext = createContext();

export function TextWrapperProvider({ children }) {
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);

  const handleClickOverview = () => {
    setOverview(true);
    setStructure(false);
    setSurface(false);
  };

  const handleClickStucture = () => {
    setOverview(false);
    setSurface(false);
    setStructure(true);
  };

  const handleClickSurface = () => {
    setOverview(false);
    setStructure(false);
    setSurface(true);
  };

  return (
    <TextWrapperContext.Provider
      value={{
        overview,
        structure,
        surface,
        handleClickOverview,
        handleClickStucture,
        handleClickSurface,
      }}
    >
      {children}
    </TextWrapperContext.Provider>
  );
}
