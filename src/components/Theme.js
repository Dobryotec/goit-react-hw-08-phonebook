import { useCallback, useEffect, useState } from 'react';

export const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark',
    },
    {
      icon: 'desktop',
      text: 'system',
    },
  ];

  const onWindowMatch = useCallback(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [darkQuery.matches, element.classList]);

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme, element.classList, onWindowMatch]);

  darkQuery.addEventListener('change', e => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  return (
    <div
      className=" dark:bg-slate-800 dark:border-solid dark:border-2
     dark:border-amber-400 border-solid border-2 border-sky-500 bg-gray-100
      rounded flex items-center justify-center "
    >
      {options?.map(option => (
        <button
          key={option.text}
          onClick={() => setTheme(option.text)}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
            theme === option.text && 'text-sky-600'
          }`}
        >
          <ion-icon name={option.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
};
