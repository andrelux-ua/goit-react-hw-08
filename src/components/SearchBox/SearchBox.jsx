import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';
import { useEffect, useRef } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.searchLabel}>
        Find contacts by name
      </label>

      <input
        ref={inputRef}
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
