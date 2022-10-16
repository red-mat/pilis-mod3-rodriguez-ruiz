import { createContext, useState } from "react";
import { useDictionaryStorage } from "../../local_storage/hooks/package";

const KEY_STORAGE='locations'

export const LocationsContext = createContext({
    locations:[],
    setLocations: () => {}
})

const LocationsProvider = ({ children }) => {
    const [state, setState] = useState({error:''});

    const {clear, dic, keys, add, dell, get, set} =  useDictionaryStorage(KEY_STORAGE);

    const addLocation = (location) => {
        const {latitude, longitude} = location;
        // comprobar los datos de locations
        try {
            add(
                `${latitude}${longitude}`,
                location
            )
        } catch (error) {
            setState( state =>{
                const newState = {...state};
                newState.error = error;
                return newState;
            })
        }
    }
    
    const dellLocation = (id) => {}
    const getLocation = (id) => {}
    const setLocation = (id, location) => {}

    const value = {
        state,
        clear,
        locations:dic,
        locationsID:keys,
        addLocation,
        dellLocation,
        getLocation,
        setLocation,
    }
    return <LocationsContext.Provider value={value}>{children}</LocationsContext.Provider>;
}

export default LocationsProvider;