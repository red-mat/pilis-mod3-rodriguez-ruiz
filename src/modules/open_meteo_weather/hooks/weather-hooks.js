/* 
    custom hooks que retorna los datos del clima de open-meteo
*/

import { useEffect, useState } from 'react';
import fetchForecast from '../services/open-mateo';

const DEFAULT_STATE = {
  loading: true,
  error: { state: false, message: 'hola mundo' },
};

const SAFE_STATE = {
  loading: false,
  error: { state: false, message: 'hola mundo' },
};

const errorState = (e)=>({
  loading:false,
  error:{
    state:true,
    message:e
  }
})
export default function useWeatherMeteo(latitude, longitude) {
  const [weather, setWeather] = useState({});
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    // Restaurar estado por defecto
    setState(DEFAULT_STATE)
    
    // cargar datos
    fetchForecast(latitude, longitude)
    .then((weatherMeteo) => {
      setWeather(weatherMeteo)
      
      // Actualizo el estado
      setState(SAFE_STATE)
    })  

    // Salida de error
    .catch((e) => setState(errorState(e)))

  }, [latitude, longitude]);

  return [weather, state];
}
