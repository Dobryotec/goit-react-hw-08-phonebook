import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="flex flex-col ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'dark:text-amber-400 text-amber-400 inline-block p-2.5 font-bold text-2xl'
            : 'dark:text-stone-300 inline-block p-2.5 font-bold text-xl hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out'
        }
        to="/register"
      >
        Register
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'dark:text-amber-400 text-amber-400 inline-block p-2.5 font-bold text-2xl'
            : 'dark:text-stone-300 inline-block p-2.5 font-bold text-xl hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out'
        }
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
