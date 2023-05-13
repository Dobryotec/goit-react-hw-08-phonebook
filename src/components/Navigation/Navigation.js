import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'dark:text-amber-400 text-amber-400 inline-block p-2.5 font-bold text-3xl'
            : 'dark:text-stone-300 inline-block p-2.5 font-bold text-2xl hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out'
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'dark:text-amber-400 text-amber-400 inline-block p-2.5 font-bold text-3xl'
              : 'dark:text-stone-300 inline-block p-2.5 font-bold text-2xl hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out '
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
