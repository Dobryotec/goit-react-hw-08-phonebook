import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div className="container mx-auto px-2.5 text-xl dark:bg-neutral-800 rounded-b-lg shadow-2xl">
      <h1 className="py-[70px] text-[64px] font-bold mx-auto  text-amber-400 max-w-[370px] animate-bounce ">
        Phonebook
      </h1>
      <ContactForm />
      <div>
        <h2 className="text-center font-bold text-4xl text-amber-400 mt-8">
          Contacts
        </h2>
        <Filter />

        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
