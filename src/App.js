import { useEffect, useState } from 'react';
import './css/App.css';
import LocationCards from './components/LocationCard/LocationCards';
import { useWeatherMeteo } from './modules/weather_open_meteo/hooks/package';
import { getData } from './service';
import Home from './components/Home/home';


//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NewLocation from './components/new-location/new-location';
//import Home from './pages/home/home.jsx';
function App() {
  const [data, setData] = useState([]);

  // Consumo del hook para obtener un dato del clima 
  // const { weather, state } = useWeatherMeteo(
  //   {
  //     latitude: 22,
  //     longitude: 33      
  //   }
  // );

  // Consumo de lista de datos del clima ficticia
  useEffect(() => {
    getData()
      .then((data) => {
        console.log('Datos del clima: ' + data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [])

  
  return (
    <div className="App">
      <h1 className='title text-center'>Home</h1>
      {/* <button onClick={() => setData(data)}></button> */}

      {/* <div><p>Datos del clima latitud: {weather.latitude}</p></div>
      <div><p>Datos del clima longitud: {weather.longitude}</p></div>
      <div><p>Datos del clima temperatura: {weather.current_weather.temperature}</p></div>
      <div><p>Datos del clima velocidad: {weather.current_weather.windspeed}</p></div> */}
      <Home data={data} />
      {/* <LocationCards data={data} /> */}
      {/*  <Router>
        <Routes>
          <Route path="/new-location" element={<NewLocation />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
};


export default App;