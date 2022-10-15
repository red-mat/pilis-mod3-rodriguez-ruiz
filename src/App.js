import './css/App.css';

import { Route, Routes } from 'react-router-dom';
import { Navigation, Home, AddLocation } from './pages/package';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path='add-location' element={<AddLocation />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
