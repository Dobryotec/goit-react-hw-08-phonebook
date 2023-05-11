import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

const UserMenu = () => {
  const name = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
