import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { filterSelector } from '../../redux/contacts/selectors';

const SearchBox = () => {
  const formValue = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filterUserData = value => {
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={styles.seacrchForm}>
      <label className={styles.inputLabel}>
        Find contacts
        <input
          className={styles.searchInput}
          type="text"
          onChange={evt => filterUserData(evt.target.value)}
          value={formValue}
        />
      </label>
    </div>
  );
};

export default SearchBox;
