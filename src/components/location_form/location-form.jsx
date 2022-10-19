import './location-form.css';

import { useForm } from 'react-hook-form';
import { Container, Button, ErrorMessage } from '../package';

const parse_data = (data) => {
  return {
    name: data.name,
    latitude: parseFloat(data.latitude),
    longitude: parseFloat(data.longitude),
  };
};

const LocationForm = ({ handle }) => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => handle(parse_data(data));

  return (
    <Container modifier='container--form'>
      <form className='form' onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          {...register('name', {
            required: 'Debe ingresar el nombre del lugar',
          })}
          placeholder='Location name'
        />

        <input
          {...register('latitude', {
            required: 'Debe ingresar una latitud',
          })}
          type='number'
          placeholder='latitude'
        />

        <input
          {...register('longitude', {
            required: 'Debe ingresar una longitud',
          })}
          type='number'
          placeholder='longitude'
        />

        <Button modifier='form-button' type='submit'>Enviar</Button>
      </form>
    </Container>
  );
};

export default LocationForm;
