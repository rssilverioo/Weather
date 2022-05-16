import {
  createContext, useMemo, useState,
} from 'react';

export const CitiesContext = createContext();

const CitiesContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  const memoized = useMemo(() => ({
    cities,
    setCities,
  }), [cities, setCities]);

  return (
    <CitiesContext.Provider value={memoized}>
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
