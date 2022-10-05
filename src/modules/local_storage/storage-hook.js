import {useEffect, useState} from 'react'

import {getStorageItem, setStorageItem} from './storage-services'

export const initState = (key, default_value) => {
    try {
      return getStorageItem(key);     
    } catch (error) {
      setStorageItem(key, default_value); 
      return default_value;
    }
  };

const useLocalStorage = (key, default_value) => {
    const [item, setItem] = useState(initState(key, default_value));
    
    useEffect(() => {
        setStorageItem(key, item)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);
    
    return [item, setItem]
};

export default useLocalStorage;