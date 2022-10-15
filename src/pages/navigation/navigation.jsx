import './navigation.css'

import { Outlet } from 'react-router-dom';
import { NavLink } from '../../components/package';
import { FiHome, FiPlusSquare } from "react-icons/fi";

const Navigation = () => {
  return (
    <>
      <header className='header-app'>
        <nav className='nav-container'>
          <NavLink to='/'><FiHome size='2em'/></NavLink>
          <NavLink to='/add-location'><FiPlusSquare size='2em'/></NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
