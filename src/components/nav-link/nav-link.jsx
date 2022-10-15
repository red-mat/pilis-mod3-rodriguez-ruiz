import './nav-link.css';

import { Container } from '../package';

import { Link, useMatch, useResolvedPath } from "react-router-dom"


const ACTIVE ={
    'color':'var(--light-contrast)',
}


const style = (active) => {
  return active&&ACTIVE
}

const NavLinkButton = ({ children, to }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} className='nav-link'  style={style(isActive)} >
      <Container modifier='container--icon'>{children}</Container>
    </Link>
  );
};

export default NavLinkButton;