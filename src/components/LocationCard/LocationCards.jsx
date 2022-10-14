import { Row } from 'react-bootstrap';
import LocationCard from './LocationCard';


const LocationCards = ({ data }) => {
   return (
      <Row xs={1} md={3} className="g-4 p-5">
         {data.map((locationCard) => (
            <LocationCard key={locationCard.id} locationCard={locationCard} />
         ))}
      </Row>
   );
}
export default LocationCards;