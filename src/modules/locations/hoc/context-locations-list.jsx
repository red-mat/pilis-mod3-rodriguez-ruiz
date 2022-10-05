import { useContext } from 'react';
import {LocationsContext} from '../context/locations-context';


const withContextLocationsData = (Comp) => {
    const CompWithLocations = (props) => { 
        const {locations} = useContext(LocationsContext);
        
        return <Comp {...props} list={locations} />
     }
  
     return CompWithLocations
}
export default withContextLocationsData;