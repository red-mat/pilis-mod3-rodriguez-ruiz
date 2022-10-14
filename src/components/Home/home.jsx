import { Button } from "react-bootstrap";
import LocationCards from "../LocationCard/LocationCards";
import './home.css';

const Home = ({ data }) => {
    return (
        <div className="text-center">
            <h1>Lista de ubicaciones</h1>
            <div className="header p-5">
                <Button variant="primary">Agregar ubicación</Button>
            </div>
            <div>
                <LocationCards data={data} />
            </div>
        </div>
    )
}

export default Home;

