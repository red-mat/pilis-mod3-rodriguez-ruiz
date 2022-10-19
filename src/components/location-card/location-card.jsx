import './location-card.css';

import { Container } from '../package';

import { useWeatherMeteo } from '../../modules/weather_open_meteo/hooks/package';

import { FiXCircle } from 'react-icons/fi';
import { Button }from '../package'

const LocationCard = ({ location, dellLocation }) => {
  const {name, latitude, longitude} = location;
  const [weather, state] = useWeatherMeteo(latitude, longitude);

  return (
    <Container modifier='container--location-card'>
      <Button modifier='button--error' onClick={dellLocation}>
        <FiXCircle size={'0.70em'} />
      </Button>

      <h1>Lugar: {name}</h1>
      <ul>
        <li>{latitude}</li>
        <li>{longitude}</li>
        {state.loading ? (
          '...loading'
        ) : state.error.state ? (
          <p>{state.error.message}</p>
        ) : (
          <>
            <li>{weather.current_weather.temperature}</li>
            <li>{weather.current_weather.windspeed}</li>
          </>
        )}
      </ul>
    </Container>
  );
};
export default LocationCard;
