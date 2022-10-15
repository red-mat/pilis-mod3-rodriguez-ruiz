import useLocalStorage from './use-storage';

const useDictionaryStorage = (key) => {
  const [item, setItem, clearItem] = useLocalStorage(key, {});

  const add = (key, element) => {
    if (item[key]) throw new Error('exist element');
    setItem((item) => ({ ...item, key: element }));
  };
  const dell = (key) => {
    if (!item[key])  throw new Error('not exist item');
    setItem((item) => {
      let {key, ...newItem} = item
      return newItem
    })  
  }

  const get = (key) => { 
    if (!item[key])  throw new Error('not exist item');
    return item[key]
   }

   const set = (key, element) => {
    if (!item[key])  throw new Error('not exist item');
    setItem((item) => {
      item[key]=element

      return item;
    })
   }

   const keys = () =>  Object.keys(item);

   return {item, clearItem, add, dell, get, set, keys}
};

export default useDictionaryStorage