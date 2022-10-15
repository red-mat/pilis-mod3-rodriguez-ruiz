import LocationCards from "../../components/LocationCard/LocationCards";
import './home.css';

const Home = () => {
    return (
        <main className="text-center">
            <h1>Lista de ubicaciones</h1>
            <LocationCards></LocationCards>
        </main>
    )
}

export default Home;

