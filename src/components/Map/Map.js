import { GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback } from 'react';
import { Chart } from '@src/components';
import { useCities, useMap } from '@src/hooks';
import * as S from './Map.style';

const center = {
  lat: -23.36,
  lng: -46.84,
};

const Map = () => {
  const { cities } = useCities();
  const { setMap } = useMap();

  const onLoad = useCallback((mapRef) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    mapRef.fitBounds(bounds);
    setMap(mapRef);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const markersMap = cities.map(({ name, lat, lng }) => (
    <Marker key={`${name}-markee`} position={{ lat, lng }} title={name} />
  ));

  return (
    <S.Wrapper>
      <S.Content>
        <S.Container>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={center}
            zoom={1}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {markersMap}
          </GoogleMap>
        </S.Container>
      </S.Content>
      <Chart />
    </S.Wrapper>
  );
};

export default Map;
