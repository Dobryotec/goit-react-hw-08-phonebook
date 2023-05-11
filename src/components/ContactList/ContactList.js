import css from './ContactList.module.css';
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
      <li className={css.item} key={id}>
        {index + 1}. {name}: {phone}
        <button
          className={css.btn}
          onClick={() => dispatch(delContact(id))}
          disabled={isLoading}
        >
          Delete
        </button>
      </li>
    );
  };

  return (
    <ul className={css.list}>
      {isLoading && <ClipLoader color="blue" />}
      {error && <div>{error}</div>}
      {filtredContacts().map(({ id, name, phone }, index) => {
        return renderContacts(id, name, phone, index);
      })}
    </ul>
  );
};

export default ContactList;
