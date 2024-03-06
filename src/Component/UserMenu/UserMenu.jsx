import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { FaUser } from "react-icons/fa";
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <header className={css.header}>
        <FaUser />
        <p className={css.title}>Welcome, {user.name}</p>
        <button type="button" className={css.button} onClick={() => dispatch(logOut())}>
        Logout
        </button>
    </header>
  );
};
