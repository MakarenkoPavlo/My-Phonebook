import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/Contacts/filterSlice';
import { selectFilter } from '../../redux/Contacts/selectors';
import css from './SearchForm.module.css'
const SearchForm = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  const value = useSelector(selectFilter).text;

  return (
    <div className={css.container}>
      <label htmlFor={searchId} className={css.label}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={handleFilterChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchForm;
