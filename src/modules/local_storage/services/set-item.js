export const setStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};