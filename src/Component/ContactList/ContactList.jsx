import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact => {
  const filterLowerCase = typeof filter === 'string' ? filter.toLowerCase() : '';
  return (
    contact.name.toLowerCase().includes(filterLowerCase) ||
    contact.phone.toLowerCase().includes(filterLowerCase)
  );
});

  return (
    <div>
      <h2>Contacts:</h2>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
