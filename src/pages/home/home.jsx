import './home.css'
import { useContext } from 'react';
import {LocationCard, ErrorMessage } from '../../components/package'
import { LocationsContext } from '../../modules/locations/context/locations-context';

const Home = () => {
  const {locationsID, getLocation, dellLocation, error} = useContext(LocationsContext);

  return (
  <main>
      <div className='location-cards'>
         {locationsID().map((id) =>  <LocationCard key={id} location={getLocation(id)} dellLocation={() => dellLocation(id)} />)}
      </div>
       <ErrorMessage error={error}/>
  </main>)
}

export default Home;