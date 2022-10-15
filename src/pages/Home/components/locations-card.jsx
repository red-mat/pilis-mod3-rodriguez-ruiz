// importamos el componente base
import { LocationCard as Lc } from '../../../components/package';
import LocationCards from '../../../components/LocationCard/LocationCards';
import { weatherData } from '../../../data/weatherData';

const LocationCard = () => {
    // context o hooks

    // retorna locations cards con los datos
    // return (<LocationCard data={weather} />)
    function handleRemove(id){
        const newList = weatherData.filter((item) => item.id !== id);
        setHandleRemove(newList);
    }

    return (
        <Row xs={1} md={3} className="g-4 p-5">
            {weatherData.map((locationCard) => (
                <LocationCard key={locationCard.id} locationCard={locationCard} />
            ))}
        </Row>
    )
}