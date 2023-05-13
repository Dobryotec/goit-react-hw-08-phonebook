import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

const UserMenu = () => {
  const name = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <div>
      <p className="font-bold text-xl pr-2 text-amber-400 animate-pulse mb-3">
        Welcome, {name}
      </p>
      <button
        className="bg-gradient-to-r from-slate-400 to-amber-400 py-1 px-3 text-white rounded-full hover:bg-gradient-to-l hover:from-black hover:to-amber-400 animate-pulse transition ease-in-out hover:duration-500 font-bold"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
