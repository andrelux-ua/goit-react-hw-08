import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" style={{ margin: '0 8px' }}>
        Register
      </NavLink>
      <NavLink to="/login" style={{ margin: '0 8px' }}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
