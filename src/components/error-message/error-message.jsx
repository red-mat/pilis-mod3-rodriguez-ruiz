import './error-message.css';

import {Container, Button} from '../package';
import { FiXCircle } from "react-icons/fi";


const ErrorMessage = ({error}) => { 
  
    return error.message&&(
      <Container modifier='container--error'>
        <Button  modifier='button--error' onClick={error.clear}>
            <FiXCircle size={'0.70em'}/>
        </Button>
        <p>
          {error.message}
        </p>
      </Container>
    )

 }

 export default ErrorMessage