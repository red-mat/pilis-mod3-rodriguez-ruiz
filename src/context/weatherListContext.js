import { weatherData } from "../components/weatherData";
import React from "react";


// Objeto para tener cargada la lista original y una función asociada
const initialState = {
    weatherList: weatherData,
    setWeatherList: () => {}
}

export const WeatherListContext = React.createContext(initialState);