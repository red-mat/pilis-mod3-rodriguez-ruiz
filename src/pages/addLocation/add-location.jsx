import './add-location.css';

import {LocationForm, ErrorMessage} from '../../components/package';
import {LocationsContext} from '../../modules/locations/context/locations-context'
import { useContext } from 'react';

const AddLocation = () => {
  const {addLocation, error} = useContext(LocationsContext);
  
  return (
    <main>
        <LocationForm handle={addLocation}/>
        <ErrorMessage error={error}/>
    </main>
  );
};

export default AddLocation;
