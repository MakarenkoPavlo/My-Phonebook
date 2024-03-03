import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { FaRegUser } from "react-icons/fa";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <header>
        <FaRegUser />
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
        Logout
        </button>
    </header>
  );
};
