import { REACT_APP_WEATHER_API_KEY, REACT_APP_WEATHER_API_URL } from '@src/environments/base';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const getCity = async (name) => {
  const geocode = await geocodeByAddress(name);
  const { lat, lng } = await getLatLng(geocode[0]);
  const response = await fetch(`${REACT_APP_WEATHER_API_URL}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`);
  const data = await response.json();
  const city = {
    name,
    lat,
    lng,
    weather: {
      min_temperature: data.main.temp_min,
      max_temperature: data.main.temp_max,
      temperature: data.main.temp,
    },
  };
  return city;
};

export default getCity;
