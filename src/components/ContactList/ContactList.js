import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts, delContact } from '../../redux/contacts/thunks';
import { ClipLoader } from 'react-spinners';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const renderContacts = (id, name, phone, index) => {
    return (
      <li key={id}>
        {index + 1}. {name}: {phone}
        <button
          className="ml-10 mt-6 bg-gradient-to-r from-slate-400 to-amber-400 py-1 px-3 text-white rounded-full hover:bg-gradient-to-l hover:from-black hover:to-amber-400 animate-pulse transition ease-in-out hover:duration-500 font-bold shadow-2xl"
          onClick={() => dispatch(delContact(id))}
          disabled={isLoading}
        >
          Delete
        </button>
      </li>
    );
  };

  return (
    <ul className="container  w-[280px] mx-auto py-12 font-bold dark:text-amber-400">
      {isLoading && <ClipLoader color="gold" />}
      {error && <div>{error}</div>}
      {filtredContacts().map(({ id, name, phone }, index) => {
        return renderContacts(id, name, phone, index);
      })}
    </ul>
  );
};

export default ContactList;
