import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ paddingBottomBottom: '5px' }}>
      <NavLink to="/" style={{ margin: '0 10px' }}>
        Home
      </NavLink>
      <NavLink to="/contacts" style={{ margin: '0 10px' }}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
