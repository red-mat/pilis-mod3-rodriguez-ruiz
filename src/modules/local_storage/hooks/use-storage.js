/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getStorageItem, setStorageItem } from '../services/package';

const initState = (key, default_value) => {
  try {
    return getStorageItem(key);
  } catch (error) {
    setStorageItem(key, default_value);
    return default_value;
  }
};

const useLocalStorage = (key, default_value) => {
  const [item, setItem] = useState(initState(key, default_value));

  const clearItem = () => setItem(default_value);

  useEffect(() => {
    setStorageItem(key, item);
    (item === null) && localStorage.removeItem(key);
  }, [item]);

  return [item, setItem, clearItem];
};

export default useLocalStorage;
