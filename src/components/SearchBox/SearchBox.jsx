import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterSelector } from '../../redux/filters/selectors';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const searchId = useId();
  const formValue = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filterUserData = value => {
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={styles.seacrchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        id={searchId}
        onChange={evt => filterUserData(evt.target.value)}
        value={formValue}
      />
    </div>
  );
};

export default SearchBox;
