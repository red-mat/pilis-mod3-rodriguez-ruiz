import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/add-location'>add locations</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
