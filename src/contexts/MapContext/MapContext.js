import { useJsApiLoader } from '@react-google-maps/api';
import { REACT_APP_GOOGLE_MAPS_KEY } from '@src/environments/base';
import { createContext, useMemo, useState } from 'react';

export const MapContext = createContext();

const MapContextProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    libraries: ['places'],
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  const memoized = useMemo(() => ({
    isLoaded,
    map,
    setMap,
  }), [isLoaded, map, setMap]);

  return (
    <MapContext.Provider value={memoized}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
