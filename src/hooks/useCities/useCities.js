import { useContext } from 'react';
import { CitiesContext } from '@src/contexts/CitiesContext/CitiesContext';

const useCities = () => useContext(CitiesContext);

export default useCities;
