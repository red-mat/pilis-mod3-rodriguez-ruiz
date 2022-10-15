import { createContext } from "react";
import useLocalStorage from "../../local_storage/storage-hook";

const KEY_STORAGE='locations'
const DEFAULT_VALUE=[];

export const LocationsContext = createContext({
    locations:[],
    setLocations: () => {}
})

const LocationsProvider = ({ children }) => {
    const [locations, setLocations] = useLocalStorage(KEY_STORAGE, DEFAULT_VALUE);
    const value = {locations, setLocations}
  
    return <LocationsContext.Provider value={value}>{children}</LocationsContext.Provider>;
}

export default LocationsProvider;