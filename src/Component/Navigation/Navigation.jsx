import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} activeclassname={css.activeLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} activeclassname={css.activeLink} to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};