import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LocationsProvider from './modules/locations/context/locations-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocationsProvider>
        <App />
      </LocationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
