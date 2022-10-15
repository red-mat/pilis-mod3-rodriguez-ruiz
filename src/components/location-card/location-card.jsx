import './location-card.css';


import { Container } from '../package';

import {useWeatherMeteo} from '../../modules/weather_open_meteo/hooks/package'   

const LocationCard = ({name, latitude, longitude}) => { 
    const  [weather, state] = useWeatherMeteo()

    return (
        <Container modifier='container--location-card'>
        <p>{name}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>

        {state.loading || '...loading'}
        
        {state.error.state?
        'fallo al cargar los datos':
        <>
            <p>{weather.current_weather.temperature}</p>
            <p>{weather.current_weather.windspeed}</p>
        </>
        }
        </Container>
    )
 }
 export default LocationCard;