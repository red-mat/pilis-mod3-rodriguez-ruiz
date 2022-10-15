import './add-location.css';

import { useState } from 'react';
import {LocationForm, ErrorMessage} from '../../components/package';

const AddLocation = () => {
 
  const [data, setData] = useState('');
  const handle = (data) => { 
    console.log(data);
   }
  return (
    <main>
        <LocationForm handle={handle}/>
        <ErrorMessage isError={true}>hola mundo</ErrorMessage>
    </main>
  );
};

export default AddLocation;
