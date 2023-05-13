import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from '../../redux/contacts/thunks';

import { selectContacts } from 'redux/contacts/selectors';

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
    <form
      className="container flex justify-center items-center flex-col gap-y-5 dark:bg-neutral-800"
      onSubmit={handleSubmit}
    >
      <div className="inline-flex flex-col gap-y-2.5">
        <label
          className="dark:text-stone-300 font-bold text-2xl"
          htmlFor={nameInputId}
        >
          Name
        </label>
        <input
          className="w-full font-bold  invalid:text-pink-600 focus:border-sky-500 px-4 py-1.5 
          shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500  border-solid border-4
           border-amber-400  rounded dark:text-stone-500 "
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className="inline-flex flex-col gap-y-2.5">
        <label
          className="dark:text-stone-300 font-bold text-2xl"
          htmlFor={numberInputId}
        >
          Number
        </label>
        <input
          className="w-full font-bold px-4 py-1.5 shadow-xl  border-solid border-4 border-amber-400 
          rounded focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500
           dark:text-stone-500"
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
      <button
        className="bg-gradient-to-r from-slate-400 to-amber-400 py-1 px-3 text-white rounded-full 
        hover:bg-gradient-to-l hover:from-black hover:to-amber-400 animate-pulse 
        transition ease-in-out hover:duration-500 font-bold shadow-2xl"
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}
