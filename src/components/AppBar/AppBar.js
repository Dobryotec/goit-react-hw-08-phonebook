import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Theme } from 'components/Theme';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header
      className="container shadow-2xl rounded-t-lg flex items-center mx-auto text-center 
    justify-between py-7  dark:bg-neutral-800 dark:text-amber-400
     dark:border-b-2 dark:border-amber-400"
    >
      <Navigation />
      <Theme />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
