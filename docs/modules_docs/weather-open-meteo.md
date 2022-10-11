# Open meteo module

# Use Weather Meteo

📢 **Importante:** este es un ejemplo de uso completo para su uso normal
solo es necesario la latitud y la longitud.

```js
//ejemplo completo

import {useWeatherMeteo} from 'modules/weather_open_meteo/hooks/package'

const [weather, state] = useWeatherMeteo(
    latitude:22,
    longitude:33,
    current_weather:true,
    timezone:'America/Argentina/Jujuy'
)

// valor de state
state={
  loading:boolean,
  error:{
    state:boolean,
    message:string
  }
}

// valor de weather
weather={
    generationtime_ms:0.2650022506713867,

    weathercode:0,
    current_weather:{
        temperature: 26.9, 
        windspeed: 15.9, 
        winddirection: 342, 
        weathercode: 0, 
        time: '2022-10-10T22:00'
    }

    latitude:22,
    longitude:33,
    
    winddirection:342,
    windspeed:15.9,
    elevation:258,
    
    time:'2022-10-10T22:00',
    timezone:'America/Argentina/Jujuy',
    timezone_abbreviation:'-03',
    utc_offset_seconds:-10800,
}
```
