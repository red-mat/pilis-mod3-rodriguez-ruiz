import { Row } from 'react-bootstrap';
import LocationCard from './LocationCard';
import { weatherData } from '../../data/weatherData';
import { useState } from 'react';

const LocationCards = () => {
   return (
      <Row xs={1} md={3} className="g-4 p-5">
         {weatherData.map((locationCard) => (
            <LocationCard key={locationCard.id} locationCard={locationCard} />
         ))}
      </Row>
   );
}
export default LocationCards;