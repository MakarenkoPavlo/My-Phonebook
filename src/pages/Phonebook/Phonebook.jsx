import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/Contacts/operations";
import { selectLoading, selectError } from '../../redux/Contacts/selectors';
import ContactForm from '../../Component/ContactForm/ContactForm';
import ContactList from '../../Component/ContactList/ContactList';
import SearchForm from '../../Component/SearchForm/SearchForm';
import css from './Phonebook.module.css'

export default function Phonebook () {
    
   const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
     return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.container}>
        <div className={css.addContact}>
          <ContactForm />
          <SearchForm />
          {loading && !error && <p className={css.loading}>Request in progress...</p>}
        </div>
        <div className={css.contactList}>
          <ContactList />
          {error && <p className={css.error}>Failed to fetch contacts</p>}
        </div>
      </div>
    </div>
  );

}