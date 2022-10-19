import { createContext, useState } from 'react';
import { useDictionaryStorage } from '../../local_storage/hooks/package';

const KEY_STORAGE = 'locations';

export const LocationsContext = createContext({
  locations: [],
  setLocations: () => {},
});

const LocationsProvider = ({ children }) => {
  const [state, setState] = useState({ error: '' });
  const error = {
    message: state.error,
    clear: () => {
      setState({ error: '' });
    },
  };

  const { clear, dic, keys, add, dell, get, set } =
    useDictionaryStorage(KEY_STORAGE);

  const addLocation = (location) => {
    const { latitude, longitude } = location;
    // comprobar los datos de locations
    try {
      if ((Math.abs(latitude) > 90) || (Math.abs(longitude) > 90))
          throw new RangeError('valor fuera de rango')
      add(`${latitude}${longitude}`, location);
    } catch (error) {
      setState((state) => {
        const newState = { ...state };
        newState.error = error.message;
        return newState;
      });
    }
  };

  const dellLocation = (id) => {
    // comprobar los datos de locations
    try {
      dell(id);
    } catch (error) {
      setState((state) => {
        const newState = { ...state };
        newState.error = error.message;
        return newState;
      });
    }
  };
  const getLocation = (id) => {
    // comprobar los datos de locations
    try {
      return get(id);
    } catch (error) {
      setState((state) => {
        const newState = { ...state };
        newState.error = error.message;
        return newState;
      });
    }
  };
  const setLocation = (id, location) => {};

  const value = {
    clear,
    locationsID: keys,
    addLocation,
    dellLocation,
    getLocation,
    setLocation,
    error,
  };
  return (
    <LocationsContext.Provider value={value}>
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
