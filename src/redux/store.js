import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './Contacts/contactsSlice';
import { filtersReducer  } from './Contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,}
  
});


