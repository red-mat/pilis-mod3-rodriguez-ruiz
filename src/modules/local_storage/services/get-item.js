export const getStorageItem = (key) => {
    const item = localStorage.getItem(key);

    if (item === null) throw new Error('no existe el item')

    return JSON.parse(item);
};
