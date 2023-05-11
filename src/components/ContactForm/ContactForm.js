import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from '../../redux/contacts/thunks';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/contacts/selectors';

const notify = () =>
  toast.success('Successfully created!', {
    position: 'top-right',
    iconTheme: {
      primary: 'blue',
      secondary: 'white',
    },
  });

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    console.log(newContact);
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addNewContact(newContact));
    }
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css['form-name']}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className={css['form-number']}>
        <label className={css.label} htmlFor={numberInputId}>
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          onChange={handleChange}
          value={number}
        />
      </div>
      <button className={css.btn} type="submit" onClick={notify}>
        Add contact
      </button>
      <Toaster />
    </form>
  );
}
