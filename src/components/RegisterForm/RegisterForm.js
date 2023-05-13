import { register } from 'redux/auth/thunks';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form
      className="container mx-auto flex justify-center items-center flex-col gap-y-5 dark:bg-neutral-800 py-[148px] rounded-b-lg shadow-2xl"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className="dark:text-stone-300 font-bold text-2xl flex flex-col">
        Username
        <input
          type="text"
          name="name"
          className="w-full dark:text-stone-500 px-4 py-1.5 shadow-xl  border-solid border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500 "
        />
      </label>
      <label className="dark:text-stone-300 font-bold text-2xl flex flex-col">
        Email
        <input
          type="email"
          name="email"
          className="w-full dark:text-stone-500  px-4 py-1.5 shadow-xl  border-solid border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500 "
        />
      </label>
      <label className="dark:text-stone-300 font-bold text-2xl flex flex-col">
        Password
        <input
          type="password"
          name="password"
          className="w-full dark:text-stone-500 px-4 py-1.5 shadow-xl  border-solid border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500 "
        />
      </label>
      <button
        type="submit"
        className="bg-gradient-to-r from-slate-400 to-amber-400 py-6 px-14 text-white rounded-full hover:bg-gradient-to-l hover:from-black hover:to-amber-400 animate-pulse transition ease-in-out hover:duration-500 font-bold text-2xl shadow-2xl"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
