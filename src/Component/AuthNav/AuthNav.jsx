import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
     <NavLink className={css.link} to="/register" activeclassname={css.activeLink}>
  Register
</NavLink>
<NavLink className={css.link} to="/login" activeclassname={css.activeLink}>
  Log In
</NavLink>
    </nav>
  );
};
