import useLocalStorage from './use-storage';

const useDictionaryStorage = (key) => {
  const [dic, setDic, clear] = useLocalStorage(key, {});

  const add = (key, element) => {
    if (dic[`${key}`]) throw new Error('exist element');
    
    setDic((dic) => {
      const newDic = {...dic};
      newDic[`${key}`]=element;

      return newDic;
    });
  };
  const dell = (key) => {
    if (dic[`${key}`])  throw new Error('not exist item');

    setDic((dic) => {
      let {key, ...newDic} = dic
      return newDic;
    })  
  }

  const get = (key) => { 
    if (!dic[`${key}`])  throw new Error('not exist item');

    return dic[`${key}`]
   }

   const set = (key, element) => {
    if (!dic[`${key}`])  throw new Error('not exist item');

    setDic((dic) => {
      const newDic = {...dic};
      newDic[`${key}`]=element

      return newDic;
    })
   }

   const keys = () =>  Object.keys(dic);

   return {dic, clear, add, dell, get, set, keys}
};

export default useDictionaryStorage