import { useContext } from 'react';
import {LocationsContext} from '../context/locations-context';


const setLocationsContext = (Comp) => {
    const CompWithLocations = (props) => { 
        const {setLocations} = useContext(LocationsContext);
        
        return <Comp {...props} handle={setLocations} />
     }
  
     return CompWithLocations
}
export default setLocationsContext;