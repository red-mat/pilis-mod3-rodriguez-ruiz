import './error-message.css';

import { useEffect, useState } from 'react';
import {Container, Button} from '../package';
import { FiXCircle } from "react-icons/fi";


const ErrorMessage = ({children, isError}) => { 
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      setVisible(isError)
    }
    ,[isError])

    return visible&&(
      <Container modifier='container--error'>
        <Button  modifier='button--error' onClick={() => setVisible(false)}>
            <FiXCircle size={'0.70em'}/>
        </Button>
        {children}
      </Container>
    )

 }

 export default ErrorMessage