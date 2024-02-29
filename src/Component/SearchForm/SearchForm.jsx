import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/Contacts/filterSlice';
import { selectFilter } from '../../redux/Contacts/selectors';

const SearchForm = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  const value = useSelector(selectFilter).text;

  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchForm;
