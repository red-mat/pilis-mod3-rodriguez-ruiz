// const SERVER_DOMAIN = 'https://api.open-meteo.com';
// const SERVER_DOMAIN = 'https://open-meteo.com/en/docs#latitude=-24.21&longitude=-65.28&hourly=temperature_2m,windspeed_10m';
import { weatherData } from "./components/weatherData";

export const getData = async () => {
  try {
    // const response = await fetch(`${SERVER_DOMAIN}`);
    const response = weatherData;
    // return response.json();
    return response;
  } catch {
    throw new Error('could not fetch color palettes');
  }
};

// export const getTags = async () => {
//   try {
//     const response = await fetch(`${SERVER_DOMAIN}/tags`);
//     return response.json();
//   } catch {
//     throw new Error('could not fetch tags');
//   }
// };