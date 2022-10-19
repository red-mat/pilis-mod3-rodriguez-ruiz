/* 
    custom hooks que retorna los datos del clima de open-meteo
*/
import { useEffect, useState } from 'react';
import {fetchForecast} from '../services/package';

const DEFAULT_TIMEZONE='America/Argentina/Jujuy'

const DEFAULT_STATE = {
  loading: true,
  error: { state: false, message: '' },
};

const SAFE_STATE = {
  loading: false,
  error: { state: false, message: '' },
};

const errorState = (e)=>({
  loading:false,
  error:{
    state:true,
    message:e.message
  }
})

const useWeatherMeteo = (
  latitude,
  longitude,
  current_weather=true,
  timezone=DEFAULT_TIMEZONE
) => {
  const [weather, setWeather] = useState({});
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    // Restaurar estado por defecto
    setState(DEFAULT_STATE)
    
    // cargar datos
    fetchForecast(
      latitude,
      longitude,
      current_weather,
      timezone
    ).then((weatherMeteo) => {
      setWeather(weatherMeteo)
      setState(SAFE_STATE)
    }).catch((e) => setState(errorState(e)))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return [weather, state];
}

export default useWeatherMeteo;