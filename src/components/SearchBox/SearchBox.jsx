import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.searchLabel}>
        Find contacts by name
      </label>

      <input
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
