const API_URL = 'https://api.open-meteo.com/';

const fetchForecast = async (latitude, longitude) => {
  const URI =
    API_URL +
    'v1/forecast?' +
    'current_weather=true&' +
    `latitude=${latitude}&` +
    `longitude=${longitude}&` +
    'timezone=America/Argentina/Jujuy';

    const response = await fetch(URI);
    return response.json()
};

export default fetchForecast;
