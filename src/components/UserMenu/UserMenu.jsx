import { useDispatch, useSelector } from 'react-redux';

import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { userNameSelector } from '../../redux/auth/selectors';

const UserMenu = () => {
  const userName = useSelector(userNameSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.userMenu}>
      <p>{userName}</p>
      <button
        className={styles.logOutBtn}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
