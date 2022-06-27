import { useState, createContext } from 'react';

export const TextWrapperContext = createContext();

export function TextWrapperProvider({ children }) {
  const [overview, setOverview] = useState(true);
  const [structure, setStructure] = useState(false);
  const [surface, setSurface] = useState(false);
  const [onLoad, setOnLoad] = useState(true)
  const [active, setActive] = useState(false)
  const [activeChange, setActiveChange] = useState(false)

  const handleClickOverview = () => {
    setOnLoad(false)
    setActiveChange(true)
    
    setTimeout(()=>{
      setOverview(true);
      setActive(true)
      setStructure(false);
      setSurface(false);

      setActiveChange(false)
      setActive(true)
    }, 1500)

  };

  const handleClickStucture = () => {
    setOnLoad(false)
    setActiveChange(true)
    
    setTimeout(()=>{
      setOverview(false);
      setStructure(true);
      setSurface(false);

      setActiveChange(false)
      setActive(true)
    }, 1500)
  };

  const handleClickSurface = () => {
    setOnLoad(false)
    setActiveChange(true)
    
    setTimeout(()=>{
      setOverview(false);
      setStructure(false);
      setSurface(true);
  
      setActiveChange(false)
      setActive(true)
    }, 1500)
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
        onLoad,
        active,
        setActive,
        activeChange
      }}
    >
      {children}
    </TextWrapperContext.Provider>
  );
}
