import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/Contacts/operations";
import { selectLoading, selectError } from '../../redux/Contacts/selectors';
import ContactForm from '../../Component/ContactForm/ContactForm';
import ContactList from '../../Component/ContactList/ContactList';
import SearchForm from '../../Component/SearchForm/SearchForm';


export default function Phonebook () {
    
   const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
     return (
    <div>
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
       {loading && !error && <b>Request in progress...</b>}
      <ContactList />
      {error && <p>Failed to fetch contacts</p>}
   
      
    </div>
  );

}