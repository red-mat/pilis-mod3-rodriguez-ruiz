# Modulo Local Storage
Modulo especializado en la manipulación del local storage
este modulo cuenta una hook que permite a los componentes 
el uso de la misma.

## hooks
### package
Modulo que contiene los métodos a exportar de los otros sub módulos

### use-storage
Modulo que contiene la hook useLocalStorage esta hook permite manipular y
obtener los datos del local storage bajo una misma key. Para su uso necesita
un valor por defecto distinto de null.

```js
useLocalStorage(key, default_value):[item, setItem, clearItem]
```
- item: valor del item en el local storage.
- setItem: método que cambia el valor del item.
- clearItem: retorna el item a su valor por defecto.

## services
Aquí se encuentra los módulos para modificar/agregar u obtener
un item del local storage.

### package
Modulo que contiene los métodos a exportar de los otros sub módulos

### get-item
modulo que contiene al método getStorageItem este método retorna el objeto
almacenado en el local storage.

```js
 getStorageItem(key):item 
```
En caso de no obtener null retorna una excepción.

### set-item
modulo que contiene al método setStorageItem este método añade un nuevo item 
en caso de no existir la key o modifica el valor del item al existir la key.

```js
 setStorageItem(key, value)
```
