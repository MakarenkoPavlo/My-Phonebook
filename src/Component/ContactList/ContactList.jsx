import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/Contacts/selectors';
import css from './ContactList.module.css';
import { useState } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const [scrollTop, setScrollTop] = useState(0);

  const filteredContacts = contacts.filter(contact => {
    const filterLowerCase = typeof filter === 'string' ? filter.toLowerCase() : '';
    return (
      contact.name.toLowerCase().includes(filterLowerCase) ||
      contact.number.toLowerCase().includes(filterLowerCase)
    );
  });

  const handleScroll = () => {
    setScrollTop(window.pageYOffset);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title} style={{ top: scrollTop }}>
        Contacts:
      </h2>
      <div className={css.list} onScroll={handleScroll}>
        {filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : (
          <p>No contacts found</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
