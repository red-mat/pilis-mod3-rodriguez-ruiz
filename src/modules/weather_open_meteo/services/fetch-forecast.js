const API = 'https://api.open-meteo.com/v1/forecast?';

// parameter open meteo forecast
const CURRENT_WEATHER = 'current_weather=';
const TIMEZONE='timezone=';
const LATITUDE='latitude=';
const LONGITUDE='longitude=';

const fetchForecast = async (
  latitude,
  longitude,
  current_weather=false,
  timezone='GMT'
) => {
  const URI =
    API +
    LATITUDE        + latitude        + '&' +
    LONGITUDE       + longitude       + '&' +
    CURRENT_WEATHER + current_weather + '&' +
    TIMEZONE        + timezone;
    
    const response = await fetch(URI);  
    const weather = await response.json();
    
    if (weather.error) throw new Error(weather.reason);

    return weather;
};

export default fetchForecast;
