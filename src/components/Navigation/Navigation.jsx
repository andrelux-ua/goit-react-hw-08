import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={getLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={getLinkStyles}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
