import './location-card.css';


import { Container } from '../package';

import {useWeatherMeteo} from '../../modules/weather_open_meteo/hooks/package'   

const LocationCard = ({name, latitude, longitude}) => { 
    const  [weather, state] = useWeatherMeteo(latitude, longitude)

    return (
        <Container modifier='container--location-card'>
        <h1>Lugar: {name}</h1>
        <ul>
            <li>{latitude}</li>
            <li>{longitude}</li>
        {state.loading?
        '...loading':
        state.error.state?
        'fallo al cargar los datos':
        <>
            <li>{weather.current_weather.temperature}</li>
            <li>{weather.current_weather.windspeed}</li>
        </>
        }
        </ul>
        {console.log(state)}
        </Container>
    )
 }
 export default LocationCard;
