import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink exact to="/register" className={css.link} activeClassName={css.active}>
        Register
      </NavLink>
      <NavLink exact to="/login" className={css.link} activeClassName={css.active}>
        Log In
      </NavLink>
    </nav>
  );
};
