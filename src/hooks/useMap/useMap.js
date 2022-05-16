import { MapContext } from '@src/contexts/MapContext/MapContext';
import { useContext } from 'react';

const useMap = () => useContext(MapContext);

export default useMap;
